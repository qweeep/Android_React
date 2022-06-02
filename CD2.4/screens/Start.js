import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Первый экран!</Text>
        <Button
          title="Перейти на второй экран"
          onPress={() =>
            this.props.navigation.navigate('Second')
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
    justifyContent: "center"
    }
  })
export default Start;