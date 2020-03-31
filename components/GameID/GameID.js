import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TOKEN from '../../TOKEN'

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class GameID extends React.Component {

  state = {
    gameID: ''
  };

  handleGameID = (text) => {
    this.setState({gameID: text})
  }

  storeID = () => {
    const { callback } = this.props.route.params

    this.checkIDValidity()
    ? (
      SecureStore.setItemAsync('gameID', this.state.gameID).then(res => console.log(res)),
      callback(this.state.gameID)
    )
    : alert('invalid')
  }

  checkIDValidity = () => {
    if (this.state.gameID.toLowerCase() !== 'stx0') {
      return false
    }
    return true
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, this.state);
  //  }

  render() {
    // const { callback } = this.props.route.params
    return (

      <View style={styles.container}>
        {/* <Text>Game ID</Text> */}
        <TextInput style = {styles.input}
          placeholder = 'Enter your PUBG ID'
          onChangeText= {(text) => this.handleGameID(text)}
          // defaultValue={text}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          // onPress = {callback(this.state.gameID)}
          onPress = {() => this.storeID()}
        >
          <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>

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
  input: {
    margin: 15,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  }
});
