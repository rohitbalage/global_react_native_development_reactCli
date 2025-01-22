import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReactComponentsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the React Components Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ReactComponentsScreen;
