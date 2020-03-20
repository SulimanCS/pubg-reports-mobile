import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default class main extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ACR': require('./assets/fonts/AsapCondensed-Regular.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <Text style={styles.titleText}>PUBG Reports</Text>
        </View>
      ) : null
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
