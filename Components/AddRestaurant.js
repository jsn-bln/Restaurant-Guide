import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddRestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Restaurant Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f1faee',
    }
});

export default AddRestaurantScreen;
