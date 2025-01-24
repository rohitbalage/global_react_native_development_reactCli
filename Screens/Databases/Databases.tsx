import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const { width } = Dimensions.get('window');

type DatabaseScreenProps = NativeStackScreenProps<RootStackParamList, 'DatabaseScreen'>;

const DatabaseScreen: React.FC<DatabaseScreenProps> = ({ navigation }) => {
  // List of databases with navigation targets
  const databases = [
    { id: 1, text: 'SQLite', screen: 'SQLiteScreen' },
    { id: 2, text: 'Realm', screen: 'RealmScreen' },
    { id: 3, text: 'Firebase', screen: 'Firebase' },
    { id: 4, text: 'MongoDB', screen: 'MongoDBScreen' },
    { id: 5, text: 'PostgreSQL', screen: 'PostgreSQLScreen' },
    { id: 6, text: 'MySQL', screen: 'MySQLScreen' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native Databases</Text>
      </View>

      {/* Scrollable Grid of Buttons */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {databases.map((database) => (
          <TouchableOpacity
            key={database.id}
            style={styles.gridButton}
            onPress={() => navigation.navigate(database.screen)}
          >
            <Text style={styles.buttonText}>{database.text}</Text>
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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
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
    textAlign: 'center',
  },
});

export default DatabaseScreen;
