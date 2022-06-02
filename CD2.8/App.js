// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Autorization from './pages/Autorization';
import Greeting from './pages/Greeting';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Autorization">
        <Stack.Screen 
          name="Autorization"
          component={Autorization}
          options={{
            title: 'Авторизация', //Set Header Title
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Greeting"
          component={Greeting}
          options={{
            title: 'Приветствие', //Set Header Title
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
