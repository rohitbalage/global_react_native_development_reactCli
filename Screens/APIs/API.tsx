import React, { useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const APIIntegrationScreen: React.FC = () => {
  const [fetchData, setFetchData] = useState<any[]>([]); // For Fetch API data
  const [axiosData, setAxiosData] = useState<any[]>([]); // For Axios API data
  const [loading, setLoading] = useState(false); // Loader state

  // Function to fetch data using Fetch API
  const fetchUsingFetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setFetchData(json.slice(0, 5)); // Display only the first 5 posts
    } catch (error) {
      console.error('Error fetching data with Fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch data using Axios
  const fetchUsingAxiosAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setAxiosData(response.data.slice(0, 5)); // Display only the first 5 users
    } catch (error) {
      console.error('Error fetching data with Axios:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>API Integration Screen</Text>

      {/* Button to Fetch API using Fetch */}
      <TouchableOpacity style={styles.button} onPress={fetchUsingFetchAPI}>
        <Text style={styles.buttonText}>Fetch Data Using Fetch API</Text>
      </TouchableOpacity>

      {/* Button to Fetch API using Axios */}
      <TouchableOpacity style={styles.button} onPress={fetchUsingAxiosAPI}>
        <Text style={styles.buttonText}>Fetch Data Using Axios</Text>
      </TouchableOpacity>

      {/* Loading Indicator */}
      {loading && <ActivityIndicator size="large" color="blue" style={styles.loader} />}

      {/* Fetch API Data */}
      <Text style={styles.subHeading}>Data from Fetch API:</Text>
      <FlatList
        data={fetchData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />

      {/* Axios API Data */}
      <Text style={styles.subHeading}>Data from Axios API:</Text>
      <FlatList
        data={axiosData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default APIIntegrationScreen;
