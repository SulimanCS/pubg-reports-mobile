import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TOKEN from '../../TOKEN'
import Svg, { Path } from "react-native-svg";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Button } from 'react-native-paper';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class UserInfo extends React.Component {

  deleteID = () => {
    SecureStore.deleteItemAsync('gameID')
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
                onPress={() => navigation.navigate("LifetimeStats", {ID: this.props.ID})}
              >
                <Text style={styles.buttonText}>Lifetime Stats</Text>
              </Button>
            </View>
          </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 130,
    marginRight: 10,
    marginLeft: 10
  },
  buttonText: {
    fontFamily: 'ACB',
    fontStyle: 'normal',
    lineHeight: 21,
  }
});
