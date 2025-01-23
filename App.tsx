import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactComponentsScreen from './Screens/ReactComponents/ReactComponents';
import MainScreen from './Screens/MainScreen';
import NotificationScreen from './Screens/Notifications/notifications';
import APIIntegrationScreen from './Screens/APIs/API';
import AnimationScreen from './Screens/Animation/Animation';


export type RootStackParamList = {
  MainScreen: undefined; // No params for MainScreen
  ReactComponents: undefined;
  Notifications:undefined;
  APIIntegration:undefined; // No params for ReactComponents
  Animation:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ReactComponents" component={ReactComponentsScreen} options={{ title: 'React Components' }} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{ title: 'Notifications' }} />
        <Stack.Screen name="APIIntegration" component={APIIntegrationScreen} options={{ title: 'APIs' }} />
        <Stack.Screen name="Animation" component={AnimationScreen} options={{ title: 'Animation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
