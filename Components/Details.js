import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Details = ({ navigation}) => {
    const {name, address, description, tag} = navigation.params || {};

    return(
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.detailText}>{name}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.detailText}>{address}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.detailText}>{description}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Tag:</Text>
            <Text style={styles.detailText}>{tag}</Text>
          </View>
        </View>
        <View>
        <Pressable style={styles.button}
                onPress={() => navigation.navigate('Homepage')}>
            <Text style={styles.text}>Go Back</Text>
          </Pressable>
        </View>
        
      </View>


    )


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

export default Details;