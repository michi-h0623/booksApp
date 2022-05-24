import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/feature/Home/HomeScreen';
import DetailsScreen from './src/feature/Details/DetailsScreen';
import ErrorScreen from './src/feature/Error/ErrorScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
