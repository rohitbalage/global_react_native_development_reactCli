import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OfflineStorageScreen: React.FC = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  // Save data to AsyncStorage
  const saveData = async () => {
    try {
      if (!key || !value) {
        Alert.alert('Error', 'Key and Value are required!');
        return;
      }
      await AsyncStorage.setItem(key, value);
      Alert.alert('Success', 'Data saved successfully!');
      setKey('');
      setValue('');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data!');
    }
  };

  // Retrieve data from AsyncStorage
  const getData = async () => {
    try {
      if (!key) {
        Alert.alert('Error', 'Key is required to retrieve data!');
        return;
      }
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue !== null) {
        setStoredValue(storedValue);
        Alert.alert('Success', 'Data retrieved successfully!');
      } else {
        Alert.alert('Info', 'No data found for the given key.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve data!');
    }
  };

  // Clear data for a specific key
  const clearData = async () => {
    try {
      if (!key) {
        Alert.alert('Error', 'Key is required to clear data!');
        return;
      }
      await AsyncStorage.removeItem(key);
      Alert.alert('Success', 'Data cleared successfully!');
      setStoredValue('');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear data!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Offline Storage</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter Key"
        value={key}
        onChangeText={setKey}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Value"
        value={value}
        onChangeText={setValue}
      />

      {/* Action Buttons */}
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.buttonText}>Retrieve Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearData}>
        <Text style={styles.buttonText}>Clear Data</Text>
      </TouchableOpacity>

      {/* Display Stored Value */}
      {storedValue ? (
        <Text style={styles.storedData}>Stored Value: {storedValue}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storedData: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default OfflineStorageScreen;
