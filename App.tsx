import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactComponentsScreen from './Screens/ReactComponents/ReactComponents';
import MainScreen from './Screens/MainScreen';
import NotificationScreen from './Screens/Notifications/notifications';
import APIIntegrationScreen from './Screens/APIs/API';
import AnimationScreen from './Screens/Animation/Animation';
import MapsGeolocationScreen from './Screens/Maps/GoogleMaps';
import MediaHandlingScreen from './Screens/MediaHandling/MediaHandling';
import FormsAndValidationScreen from './Screens/FormsAndValidation/FormsAndValidation';
import GoogleApisScreen from './Screens/Google APIs/GoogleAPIs';
import StateManagementScreen from './Screens/StateManagement/StateManagement';
import DatabaseScreen from './Screens/Databases/Databases';
import FirebaseScreen from './Screens/Databases/Firebase/Firebase';


export type RootStackParamList = {
  MainScreen: undefined; // No params for MainScreen
  ReactComponents: undefined;
  Notifications:undefined;
  APIIntegration:undefined; // No params for ReactComponents
  Animation:undefined;
  MapsAndGeolocation: undefined;
  MediaHandling: undefined;
  FormsAndValidation:undefined;
  GoogleAPIs: undefined;
  StateManagement: undefined;
  Databases: undefined;
  Firebase: undefined;
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
        <Stack.Screen name="MapsAndGeolocation" component={MapsGeolocationScreen} options={{ title: 'Maps And Geolocation Screen' }} />
        <Stack.Screen name="MediaHandling" component={MediaHandlingScreen} options={{ title: 'Media Handling Screen' }} />
        <Stack.Screen name="FormsAndValidation" component={FormsAndValidationScreen} options={{ title: 'Forms And Validation' }} />
        <Stack.Screen name="GoogleAPIs" component={GoogleApisScreen} options={{ title: 'Google Cloud APIs' }} />
        <Stack.Screen name="StateManagement" component={StateManagementScreen} options={{ title: 'State Management in React Native' }} />
        <Stack.Screen name="Databases" component={DatabaseScreen} options={{ title: 'Databases in React Native' }} />
        <Stack.Screen name="Firebase" component={FirebaseScreen} options={{ title: 'Firebase' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
