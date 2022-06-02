import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons'; 

export default function Autorization({navigation}) {

  const [userName, setUserName] = useState('')  
  
    return(
      <View style={styles.container}>
        <Image source={require('../src/images/image.png')} style={styles.img}/>
        <Text style={styles.header}>
          Авторизация
        </Text>
        <Text style={styles.txt1}>
          Введите свои данные
        </Text>
        <View style={styles.form}>
          <Icon name='mail' color='#00716F' size={24}/>
          <TextInput style={styles.input} 
          placeholder="Эл.почта" 
          onChangeText={(username) => setUserName(username)} />
        </View>
        <View style={styles.form}>
          <AntDesign name='lock' color='#00716F' size={24}/>
          <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true}/>
        </View>
        <View style={styles.form2}>
          <Button color='#00716F' title="Войти" 
          onPress={() => navigation.navigate('Greeting', {paramKey: userName})    }/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  img: {
    alignSelf: 'center',
    marginTop:90,
    width:200,
    height:200
  },
  header: {
    marginTop:20,
    fontSize:30,
    fontFamily:'SemiBold',
    alignSelf:'center'
  },
  txt1: {
    fontFamily:'Regular',
    marginHorizontal:55,
    textAlign:'center',
    marginTop:5,
    opacity:0.4
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:55,
    borderWidth:2, 
    marginTop:20,
    paddingHorizontal:10,
    borderColor:'#00716F',
    borderRadius:23,
    paddingVertical:2
  },
  input: {
    paddingHorizontal:10,
  },
  form2: {
    marginTop:20,
    marginHorizontal:55,
    alignItems:'center'
  },
  txt2: {
    fontFamily:'Regular',
    marginTop:50,
    textAlign:'center',
    opacity:0.4
  },
})