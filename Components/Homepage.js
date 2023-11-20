import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import SearchBar from './SearchBar';
import React,{useState} from 'react';

export default function App() {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');

    return (
      <View>
        <View style={styles.container}>
            <Text style={styles.title}>Personal Restaurant Guide</Text>
            <SearchBar
                clicked={clicked}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                setClicked={setClicked} // Ensure this prop is passed correctly
                />
        </View>
        <Text style={styles.header}>Restaurants</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#1d3557",
    },
    header: {
        fontSize: 17,
        paddingLeft: 30,
        marginTop: 20
    }
  });