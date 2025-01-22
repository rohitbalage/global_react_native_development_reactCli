import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  // Define an array with different text for each button
  const buttons = [
    { id: 1, text: 'React Components' },
    { id: 2, text: 'Native Programming' },
    { id: 3, text: 'API Integration' },
    { id: 4, text: 'Notifications' },
    { id: 5, text: 'React Hooks' },
    { id: 6, text: 'Databases' },
    { id: 7, text: 'Animations' },
    { id: 8, text: 'Security' },
    { id: 9, text: 'State Management' },
    { id: 10, text: 'Theming & Styling' },
    { id: 11, text: 'Debugging' },
    { id: 12, text: 'Performance Optimization' },
    { id: 13, text: 'Testing' },
    { id: 14, text: 'Forms & Validation' },
    { id: 15, text: 'Navigation' },
    { id: 16, text: 'Media Handling (Audio/Video)' },
    { id: 17, text: 'Maps & Geolocation' },
    { id: 18, text: 'Authentication' },
    { id: 19, text: 'Dynamic Links' },
    { id: 20, text: 'Push Notifications' },
    { id: 21, text: 'Offline Storage' },
    { id: 22, text: 'Bluetooth Integration' },
    { id: 23, text: 'Custom Native Modules' },
    { id: 24, text: 'Device Sensors (Gyroscope, Accelerometer)' },
    { id: 25, text: 'Wearable App Integration' },
    {id: 26, text: 'Exit Options'},
  ];
  return (
    <View style={styles.container}>
      {/* Header with background image */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://iili.io/2iZV2g1.md.png',
          }}
          style={styles.headerImage}
        />
      </View>

      {/* Scrollable Grid of Buttons */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {buttons.map((button) => (
          <TouchableOpacity key={button.id} style={styles.gridButton}>
            <Text style={styles.buttonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue', // Sky-blue background for the rest of the screen
  },
  header: {
    width: '100%',
    height: 200, // Height of the header image
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the header area
  },
  gridContainer: {
    flexDirection: 'row', // Horizontal layout for the grid
    flexWrap: 'wrap', // Allows wrapping into multiple rows
    justifyContent: 'space-evenly', // Evenly distribute buttons horizontally
    padding: 10, // Padding around the grid
  },
  gridButton: {
    width: (width / 2) - 30, // Ensures two buttons fit per row with spacing
    height: 100, // Height of each button
    margin: 10, // Space between buttons
    backgroundColor: 'white', // Button background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Rounded corners
    shadowColor: '#000', // Optional: Adds shadow for better appearance
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
