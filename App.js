import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default class main extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'ACR': require('./assets/fonts/AsapCondensed-Regular.ttf'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>PUBG Reports</Text>
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
  },
  titleText: {
    position: 'absolute',
    width: 112,
    height: 30,
    left: 150,
    top: 50,
    fontFamily: 'ACR',
  },
});
