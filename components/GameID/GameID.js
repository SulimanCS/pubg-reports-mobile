import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GameID extends React.Component {
  state = {
  };

  render() {
    return (

      <View style={styles.container}>
        <Text>Game ID</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
