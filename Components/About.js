import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const About = ({ navigation}) => {
  

    return(
      <View style={styles.container}>
        <View style={styles.detailContainer}>
        <Text style={styles.label}>Jayson Balano - 101397558</Text>
        <Text style={styles.label}>Nhan Nguyen - 101358649</Text>
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


export default About