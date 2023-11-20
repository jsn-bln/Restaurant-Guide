import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import SearchBar from './SearchBar';
import React,{useState} from 'react';



export default function App({navigation}) {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');


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
        <Text style={styles.header}>Restaurants</Text>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.button}
                onPress={() => navigation.navigate('AddRestaurant')}>
            <Text style={styles.text}>Add Restaurant</Text>
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
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
  });