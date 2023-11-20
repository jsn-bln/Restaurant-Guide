import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

const AddRestaurantScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Restaurant</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.inputField} placeholder='Restaurant name' />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.inputField} placeholder='Restaurant address' />
        </View>
        <View style={[styles.inputContainer]}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={[styles.inputField, {height: 150}]} 
                placeholder='What is the restaurant all about?'
                multiline />
        </View>
        <View style={[styles.inputContainer]}>
            <Text style={styles.label}>Tag</Text>
            <TextInput style={[styles.inputField]} 
                placeholder='vegetarian, vegan, organic, Italian, Thai, etc'/>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.button}>
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
