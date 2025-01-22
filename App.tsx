/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.MainHeadling}>React Native Practice App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  
  MainHeadling: {
    fontWeight: '600',       // Keeps the bold style
    fontStyle: 'normal',     // Ensures the text is not italic
    textAlign: 'center',     // Centers the text horizontally
    fontSize: 24,            // Adjusts to a larger text size (adjust value as needed)
    textDecorationLine: 'underline', // Adds an underline
  }
  
});

export default App;
