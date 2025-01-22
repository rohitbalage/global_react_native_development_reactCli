import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, FlatList, Switch, Alert } from 'react-native';

const ReactComponentsScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false); // For Switch component
  const [inputText, setInputText] = useState(''); // For TextInput value
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderHeader = () => (
    <View>
      <Text style={styles.heading}>Essential React Native UI Components</Text>

      {/* TextInput */}
      <Text style={styles.label}>TextInput:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your text"
        placeholderTextColor="gray"
        value={inputText}
        onChangeText={setInputText} // Updates the state
      />
      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => Alert.alert('Submitted Text:', inputText)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Button */}
      <Text style={styles.label}>Button:</Text>
      <Button title="Press Me" onPress={() => Alert.alert('Button Pressed!')} />

      {/* TouchableOpacity */}
      <Text style={styles.label}>TouchableOpacity:</Text>
      <TouchableOpacity style={styles.touchableButton} onPress={() => Alert.alert('TouchableOpacity Pressed!')}>
        <Text style={styles.touchableText}>Click Me</Text>
      </TouchableOpacity>

      {/* Image with onClick Listener */}
      <Text style={styles.label}>Image:</Text>
      <TouchableOpacity onPress={() => Alert.alert('Image Pressed!')}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View>
            {/* Switch */}
            <Text style={styles.label}>Switch:</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'green' }}
              thumbColor={isEnabled ? 'white' : 'white'}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        }
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue', // Skyblue background for the entire screen
  },
  flatListContent: {
    padding: 20, // Ensure padding for FlatList content
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  touchableButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  touchableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ReactComponentsScreen;
