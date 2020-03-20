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
      'ACB': require('./assets/fonts/AsapCondensed-Bold.ttf'),
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
    // position: 'absolute',
    // width: 112,
    // height: 30,
    // left: 146,
    // top: 50,
    left: 2,
    bottom: 350,
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    textTransform: "uppercase",
    color: '#A0060F'
  },
});
