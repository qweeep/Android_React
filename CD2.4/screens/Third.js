import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Third extends React.Component {
  render() {
    return (
      <View >
        <Text>Третья страница</Text>
        <Button
          title="Назад"
          onPress={() =>
            this.props.navigation.popToTop()
          }/>
      </View>
    );
  }
}
export default Third;