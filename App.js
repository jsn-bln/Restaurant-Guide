import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./Components/Homepage";
import AddRestaurantScreen from "./Components/AddRestaurant"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={HomePage} 
        options={{
          headerShown: false,
          cardStyle: { paddingTop: 100, backgroundColor: '#f1faee' }, 
        }}/>
      <Stack.Screen name="AddRestaurant" component={AddRestaurantScreen} 
        options={{
          headerShown: false,
          cardStyle: { paddingTop: 100, backgroundColor: '#f1faee' }, 
        }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1faee',
    paddingTop: 100
  },
});
