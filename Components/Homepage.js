import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from './SearchBar';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App({navigation}) {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const[savedRestaurants, setSavedRestaurants] = useState([]);
    const handleRestaurantPress = (restaurant) => {
      navigation.navigate('Details', {
        id:restaurant.id,
        name:restaurant.name,
        address:restaurant.address,
        description:restaurant.description,
        tag:restaurant.tag
      });
    };

    const handleDelete = async (restaurantId) => {
      console.log("Deleting restaurant with ID:", restaurantId);

      try {
        const storedData = await AsyncStorage.getItem('restaurantData');
        const existingData = JSON.parse(storedData);

        const updatedData = existingData.filter((existingData) => existingData.id !== restaurantId);


        await AsyncStorage.setItem('restaurantData', JSON.stringify(updatedData));
        setSavedRestaurants(updatedData)
        console.log("Restaurant has been deleted! ", updatedData);
      } catch (error) {
        console.error("An error has occurred", error);
      }
    }


    useEffect(() => {
      const fetchData = async () => {
          try{
              const storedData = await AsyncStorage.getItem('restaurantData')
              const parse = JSON.parse(storedData)
              setSavedRestaurants(parse)
                  
              
          }catch(error){
              console.log("Error has ocurred", error)

          }
      };
      fetchData();
  }, []);


    return (
        <View style={styles.container}>
        <View>
          <Text style={styles.title}>Personal Restaurant Guide</Text>
          <SearchBar
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            setClicked={setClicked}
          />
        </View>
        
        <Text style={styles.label}>Restaurants</Text>
        <View style={{width: '90%'}}>
          <View>
            {savedRestaurants &&  savedRestaurants.length > 0 ? (
                <FlatList
                data={savedRestaurants.filter(
                  (item) =>
                    item.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                    item.tag.toLowerCase().includes(searchPhrase.toLowerCase())
                )}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleRestaurantPress(item)}>
                    <View style={styles.itemContainer}>
                      <Text>{item.name}</Text>
                      <View style={styles.btnActionGroup}>
                        <Pressable onPress={() => handleDelete(item.id)}>
                          <Text style={[styles.text, { color: "#e63946" }]}>Delete</Text>
                        </Pressable>
                        <Pressable
                          onPress={() =>
                            navigation.navigate("AddRestaurant", {
                              isEditing: true,
                              restaurant: item,
                            })
                          }
                        >
                          <Text style={[styles.text, { color: "#1d3557" }]}>Edit</Text>
                        </Pressable>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
              
            ):(
                <Text>No Saved restaurants found.</Text>
            )}
        
        </View>
        

        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.button}
                onPress={() => navigation.navigate('AddRestaurant')}>
            <Text style={styles.text}>Add Restaurant</Text>
          </Pressable>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.button}
                onPress={() => navigation.navigate('About')}>
            <Text style={styles.text}>About</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 100,
      backgroundColor: '#f1faee',
    },
    itemContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: "#1d3557",
      textAlign: 'center'
    },
    header: {
      fontSize: 17,
      paddingLeft: 30,
      marginTop: 20
    },
    bottomButtonContainer: {
      width: '100%',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#e63946',
      width: 200,
    },
    deleteBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: '#e63946',
      width: 100,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    label:{
      fontWeight: 'bold',
      fontSize: 20,
      color: "#1d3557",
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 200,
      backgroundColor: '#f1faee',
    },
    btnActionGroup: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '40%'
    }
    
  });