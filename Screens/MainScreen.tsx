import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const { width } = Dimensions.get('window');

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
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
          <TouchableOpacity
            key={button.id}
            style={styles.gridButton}
            onPress={() => {
              if (button.text === 'React Components') {
                navigation.navigate('ReactComponents'); // Navigate to React Components screen
              }

              if (button.text === 'Notifications') {
                navigation.navigate('Notifications'); // Navigate to React Components screen
              }
              if (button.text === 'API Integration') {
                navigation.navigate('APIIntegration'); // Navigate to React Components screen
              }
              if (button.text === 'Animations') {
                navigation.navigate('Animation'); // Navigate to React Components screen
              }
              if (button.text === 'Maps & Geolocation') {
                navigation.navigate('MapsAndGeolocation'); // Navigate to React Components screen
              }
              if (button.text === 'Media Handling (Audio/Video)') {
                navigation.navigate('MediaHandling'); // Navigate to React Components screen
              }
              if (button.text === 'Forms & Validation') {
                navigation.navigate('FormsAndValidation'); // Navigate to React Components screen
              }
            }}
          >
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
    backgroundColor: 'skyblue',
  },
  header: {
    width: '100%',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  gridButton: {
    width: (width / 2) - 30,
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
