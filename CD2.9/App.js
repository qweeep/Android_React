import React from "react";
import {StyleSheet,Text,View,ScrollView,ImageBackground,TouchableOpacity,ToastAndroid,Platform,ActionSheetIOS,Alert} from "react-native";
const items = {
  items: ["Свечка","Собака мордой вниз","Поза воина", "Поза моста", "Наклон вперед"],
  uri: ["https://www.vitajournal.ru/wp-content/uploads/2018/03/2-07-ad.png","https://www.vitajournal.ru/wp-content/uploads/2018/03/2-05-ad.png","https://www.vitajournal.ru/wp-content/uploads/2018/03/2-03-ad.png", "https://www.vitajournal.ru/wp-content/uploads/2018/03/2-06-ad.png", "https://www.vitajournal.ru/wp-content/uploads/2018/03/2-02-ad.png"],
};

export default class App extends React.Component {
  handlePlatform(text) {
    if (Platform.OS === "android") {
      this.handlePressAndroidToast(text);
    } else if (Platform.OS === "ios") {
      this.handlePressIOS(text);
    }
  }

  handlePressAndroidToast(text) {
    ToastAndroid.show(Platform.OS+": Вы выбрали - " + text, ToastAndroid.LONG);
  }

  handlePressIOS(text) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [ "Выбрать", "Отмена"],
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          Alert.alert(Platform.OS+": Вы отменили выбор ");
        } 
        else if (buttonIndex === 0) {
          Alert.alert(Platform.OS+": Вы выбрали - " + text);
        }
      }
    );
  }

  render() {
    const renderItems = () => {
      return items["items"].map((item, id) => {
        return (
          <TouchableOpacity
            style={styles.item}
            key={id}
            onPress={() => this.handlePlatform(item)} >
            <ImageBackground
              style={styles.img}
              source={{ uri: items["uri"][id] }} />
            <Text style={styles.txt}> {item} </Text>
          </TouchableOpacity>
        );
      });
    };

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Позы для йоги</Text>
        <ScrollView>{renderItems()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
    backgroundColor:"#E6E6FA"
  },
  paragraph: {
    textAlign:"center",
    fontWeight:"bold",
    fontSize:19
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  txt:{
    fontSize: 17,
    marginStart: 10,
    fontWeight:"bold",
    width:150
  },
  img: {
    width: 200,
    height: 150,
  },
});

