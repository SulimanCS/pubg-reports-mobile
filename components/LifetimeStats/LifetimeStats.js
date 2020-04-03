
import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, View, TouchableOpacity } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Button } from 'react-native-paper';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class LifetimeStats extends React.Component {

  render() {
    const { ID } = this.props.route.params
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{ID}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    marginTop: hp('5%'),
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    color: '#A0060F'
  },
});