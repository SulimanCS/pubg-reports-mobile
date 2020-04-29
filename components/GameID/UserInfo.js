import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TOKEN from '../../TOKEN'
import Svg, { Path } from "react-native-svg";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Button } from 'react-native-paper';
import styles from './UserInfoStyles'

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class UserInfo extends React.Component {

  deleteID = () => {
    SecureStore.deleteItemAsync('gameID')
    SecureStore.deleteItemAsync('accountID')
    this.props.callback(null)
  }

  unlinkID = () => {
    const { navigation } = this.props;
    this.deleteID()
    navigation.navigate("Home")
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.props.ID}</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                color="#000"
                onPress={this.unlinkID}
              >
                <Text style={styles.buttonText}>Unlink</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                color="#000"
                onPress={() => navigation.navigate("LifetimeStats", {
                  ID: this.props.ID,
                  longID: this.props.longID,
                  platform: this.props.platform
                })}
              >
                <Text style={styles.buttonText}>Lifetime Stats</Text>
              </Button>
            </View>
          </View>
      </View>
    );
  }
}
