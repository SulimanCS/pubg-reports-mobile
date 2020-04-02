import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TOKEN from '../../TOKEN'
import Svg, { Path } from "react-native-svg";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class UserInfo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.props.ID}</Text>
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
