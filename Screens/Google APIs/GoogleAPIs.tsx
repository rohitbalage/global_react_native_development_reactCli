import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';

// Replace with your Google API key
const GOOGLE_API_KEY = 'AIzaSyB72KAjHGRf9yG-cJgnt07yp_ruPPH4uAk';

const GoogleApisScreen: React.FC = () => {
  const [place, setPlace] = useState('');
  const [validatedAddress, setValidatedAddress] = useState('');
  const [timezone, setTimezone] = useState('');

  // Places API
  const fetchPlaceSuggestions = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
        {
          params: {
            input: place,
            key: GOOGLE_API_KEY,
          },
        }
      );
      Alert.alert(
        'Place Suggestions',
        response.data.predictions.map((pred: any) => pred.description).join('\n')
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch place suggestions');
    }
  };

  // Address Validation API
  const validateAddress = async () => {
    try {
      const response = await axios.post(
        `https://addressvalidation.googleapis.com/v1:validateAddress`,
        {
          address: {
            addressLines: [validatedAddress],
          },
        },
        {
          params: { key: GOOGLE_API_KEY },
        }
      );
      Alert.alert('Validated Address', JSON.stringify(response.data, null, 2));
    } catch (error) {
      Alert.alert('Error', 'Failed to validate address');
    }
  };

  // Timezone API
  const fetchTimezone = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/timezone/json`,
        {
          params: {
            location: '40.7128,-74.0060', // Example: New York coordinates
            timestamp: Math.floor(Date.now() / 1000),
            key: GOOGLE_API_KEY,
          },
        }
      );
      setTimezone(response.data.timeZoneName);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch timezone');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Google APIs</Text>

      {/* Places API */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Places API</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a place"
          value={place}
          onChangeText={setPlace}
        />
        <TouchableOpacity style={styles.button} onPress={fetchPlaceSuggestions}>
          <Text style={styles.buttonText}>Fetch Place Suggestions</Text>
        </TouchableOpacity>
      </View>

      {/* Address Validation */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Address Validation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter an address"
          value={validatedAddress}
          onChangeText={setValidatedAddress}
        />
        <TouchableOpacity style={styles.button} onPress={validateAddress}>
          <Text style={styles.buttonText}>Validate Address</Text>
        </TouchableOpacity>
      </View>

      {/* Timezone API */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Timezone API</Text>
        <TouchableOpacity style={styles.button} onPress={fetchTimezone}>
          <Text style={styles.buttonText}>Fetch Timezone</Text>
        </TouchableOpacity>
        <Text style={styles.result}>Timezone: {timezone}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
});

export default GoogleApisScreen;
