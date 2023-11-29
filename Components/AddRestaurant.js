import React, {useState, useEffect,useRef} from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const AddRestaurantScreen = ({navigation}) => {

  const[restaurantData, setRestaurantData] = useState({
    id:0,
    name: '',
    address:'',
    description:'',
    tag:'',
  });

  useEffect(() => {
    const fetchData = async () => {
        try{
            const storedData = await AsyncStorage.getItem('restaurantData')
            if(storedData){
                const parse = JSON.parse(storedData)
                setRestaurantData(parse)
            }
        }catch(error){
            console.log("Error has ocurred", error)

        }
    };
    fetchData();
}, []);
let restaurantIdCounter = useRef(0);
const save = async () => {
  try {
    const storedData = await AsyncStorage.getItem('restaurantData');
    const existingData = storedData ? JSON.parse(storedData) : [];
    const updatedData = [
      ...existingData,
      { ...restaurantData, id: restaurantIdCounter.current++ },
    ];

    await AsyncStorage.setItem('restaurantData', JSON.stringify(updatedData));
    console.log('Restaurant details have been saved! ', updatedData);

    setRestaurantData({
      name: '',
      address: '',
      description: '',
      tag: '',
    });

    navigation.navigate('Homepage', {
      id: restaurantData.restaurantIdCounter, 
      name: restaurantData.name,
      address: restaurantData.address,
      description: restaurantData.description,
      tag: restaurantData.tag,
    });
  } catch (error) {
    console.error('An error has occurred', error);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Restaurant</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.inputField} placeholder='Restaurant name'  
            value={restaurantData.name}
            onChangeText={(text)=>
              setRestaurantData((prevData)=> ({...prevData, name: text}))
            } />
          
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.inputField} placeholder='Restaurant address'
             value={restaurantData.address}
             onChangeText={(text)=>
               setRestaurantData((prevData)=> ({...prevData, address: text}))
             }
            
            />
           
        </View>
        <View style={[styles.inputContainer]}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={[styles.inputField, {height: 150}]} 
                placeholder='What is the restaurant all about?'

                multiline 
                value={restaurantData.description}
                onChangeText={(text)=>
                  setRestaurantData((prevData)=> ({...prevData, description: text}))
                }
                />
                
        </View>
        <View style={[styles.inputContainer]}>
            <Text style={styles.label}>Tag</Text>
            <TextInput style={[styles.inputField]} 
                placeholder='vegetarian, vegan, organic, Italian, Thai, etc'
                value={restaurantData.tag}
                onChangeText={(text)=>
                  setRestaurantData((prevData)=> ({...prevData, tag: text}))
                }
                />
                
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.button} onPress={save}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
          <Pressable style={[styles.button, , {backgroundColor: '#1d3557'}]}
            onPress={() => navigation.navigate('Homepage')}>
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f1faee',
    },
    formContainer: {
        paddingTop: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#1d3557",
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: 15,
        width: 300,
      },
    label: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    inputField: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: "100%",
        backgroundColor: '#fff'
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#e63946',
        width: 120,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default AddRestaurantScreen;
