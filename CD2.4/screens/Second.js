import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Second extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Вторая страница</Text>
        <Button
          title="Назад"
          onPress={() =>
            this.props.navigation.goBack()
          }/>
        <Button
          title="Третий экран"
          onPress={() =>
            this.props.navigation.navigate('Third')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: '20px'}
  })
export default Second;