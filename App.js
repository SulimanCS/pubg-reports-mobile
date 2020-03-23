import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  }
}
