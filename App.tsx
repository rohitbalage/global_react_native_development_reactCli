import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactComponentsScreen from './Screens/ReactComponents/ReactComponents';
import MainScreen from './Screens/MainScreen';


export type RootStackParamList = {
  MainScreen: undefined; // No params for MainScreen
  ReactComponents: undefined; // No params for ReactComponents
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ReactComponents" component={ReactComponentsScreen} options={{ title: 'React Components' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
