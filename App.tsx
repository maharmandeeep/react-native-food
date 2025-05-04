import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import "@unistyles/unistyles"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App name nd this ne</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the View take up the full screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#f5f5f5', // Adds a light background color
  },
  text: {
    fontSize: 20, // Increases text size
    color: '#333', // Sets text color
  },
});

export default App;