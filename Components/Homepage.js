import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <Text>This is the homepage</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
  });