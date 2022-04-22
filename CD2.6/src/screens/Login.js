import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 

export default class Login extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
          padding: 40,
          paddingTop: 50,
          backgroundColor: 'white'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Image
            source={require('../images/image.jpg')}
            style={{
              width: 293,
              height: 281,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Авторизация
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'grey',
            marginBottom: 50,
          }}>
          Введите логин и пароль, которые создавали ранее при регистрации.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#ffdf92',
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          <Icon name="mail" size={24} color="#ffdf92" />
          <TextInput placeholder="Email" style={{ paddingHorizontal: 10 }} />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          marginBottom: 30,
          paddingHorizontal: 10,
          borderColor: '#ffdf92',
          paddingVertical: 5,
          borderRadius: 10,
        }}>
          <Icon name="lock" size={24} color="#ffdf92" />
          <TextInput 
            placeholder="Пароль"
            secureTextEntry
            style={{paddingHorizontal: 10}}
          />
        </View>

        <Button 
          title="Войти"
          color="#ffdf92"
          style={{
            marginHorizontal: 10,
          }}
          onPress={() => Alert.alert('Вы успешно вошли!')}
        />

        <Text 
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 30,
            color: '#ffdf92'
          }}
          onPress={() =>
            this.props.navigation.navigate('Registration')
          }
        >
          Зарегистрироваться
        </Text>
      </View>
    );
  }
}
