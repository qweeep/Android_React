// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ImageBackground} from 'react-native';

const SecondPage = ({route}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../src/images/bgrd.jpg')} style={styles.container}>
          <Text style={styles.heading}>
            Авторизация прошла успешно!
          </Text>
          <Text style={styles.textStyle}>
            Вы вошли как: {route.params.paramKey}
          </Text>
        </ImageBackground>
      
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color:'white'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color:'white'

  },
});
