import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FirebaseScreen: React.FC = () => {
  const [firestoreMessage, setFirestoreMessage] = useState('');
  const [authStatus, setAuthStatus] = useState('');

  // Function to test Firestore
  const testFirestore = async () => {
    try {
      const docRef = firestore().collection('TestCollection').doc('TestDoc');
      await docRef.set({ message: 'Firebase Firestore is working!' });
      const doc = await docRef.get();
      setFirestoreMessage(doc.data()?.message || 'No data found');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFirestoreMessage(`Firestore error: ${error.message}`);
      } else {
        setFirestoreMessage('An unknown error occurred.');
      }
    }
  };

  // Function to test Firebase Authentication
  const testAuth = async () => {
    try {
      const userCredential = await auth().signInAnonymously();
      setAuthStatus(`Authenticated! User ID: ${userCredential.user.uid}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setAuthStatus(`Auth error: ${error.message}`);
      } else {
        setAuthStatus('An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Firebase Integration Test</Text>

      {/* Test Firestore */}
      <TouchableOpacity style={styles.button} onPress={testFirestore}>
        <Text style={styles.buttonText}>Test Firestore</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{firestoreMessage}</Text>

      {/* Test Firebase Authentication */}
      <TouchableOpacity style={styles.button} onPress={testAuth}>
        <Text style={styles.buttonText}>Test Authentication</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{authStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'blue',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default FirebaseScreen;
