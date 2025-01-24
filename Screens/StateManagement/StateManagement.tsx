import React, { createContext, useReducer, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Redux: Create a counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const { actions, reducer } = counterSlice;
const store = configureStore({ reducer: { counter: reducer } });

// Context API: Create a counter context
const CounterContext = createContext<any>(null);

const counterReducer = (state: number, action: string) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const StateManagementScreen: React.FC = () => {
  // useState Example
  const [localCount, setLocalCount] = useState(0);

  // Context API Example
  const [contextCount, dispatch] = useReducer(counterReducer, 0);

  // Redux Example
  const reduxCount = useSelector((state: any) => state.counter.value);
  const reduxDispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>State Management Options</Text>

      {/* useState Example */}
      <View style={styles.section}>
        <Text style={styles.subheading}>1. useState</Text>
        <Text style={styles.counterText}>Local Count: {localCount}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setLocalCount(localCount + 1)}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setLocalCount(localCount - 1)}
          >
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Context API Example */}
      <View style={styles.section}>
        <Text style={styles.subheading}>2. Context API</Text>
        <Text style={styles.counterText}>Context Count: {contextCount}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch('increment')}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch('decrement')}
          >
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Redux Example */}
      <View style={styles.section}>
        <Text style={styles.subheading}>3. Redux</Text>
        <Text style={styles.counterText}>Redux Count: {reduxCount}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => reduxDispatch(actions.increment())}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => reduxDispatch(actions.decrement())}
          >
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Wrap the StateManagementScreen with Redux Provider
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CounterContext.Provider value={{}}>
        <StateManagementScreen />
      </CounterContext.Provider>
    </Provider>
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
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
