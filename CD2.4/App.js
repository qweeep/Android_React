import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './screens/Start';
import Second from './screens/Second';
import Third from './screens/Third';

const Stack = createStackNavigator(); 

class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Start}
          />
          <Stack.Screen
            name="Second"
            component={Second}
          />
          <Stack.Screen
            name="Third"
            component={Third}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    }
  })

export default App;

