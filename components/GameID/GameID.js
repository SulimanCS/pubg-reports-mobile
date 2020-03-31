import React from 'react';
import { YellowBox, StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TOKEN from '../../TOKEN'

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default class GameID extends React.Component {

  state = {
    typedGameID: '',
    gameID: null,
    gameIDLoaded: false
  };

  async componentDidMount() {
    ID = await SecureStore.getItemAsync('gameID')
    this.setState({
      gameID: ID,
      gameIDLoaded: true
    });
  }

  handleGameID = (text) => {
    this.setState({typedGameID: text})
  }

  storeID = (validID) => {
    const { callback } = this.props.route.params

    validID
    ? (
      SecureStore.setItemAsync('gameID', this.state.gameID),
      callback(this.state.gameID)
    )
    : alert('Invalid PUBG ID')
  }

  checkIDValidity = () => {
    let options = {
      headers: {
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/vnd.api+json"
      }
    }
    let url = 'https://api.pubg.com/shards/steam/players?filter[playerNames]=' + this.state.typedGameID
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data['data'][0]['attributes']['name'])
        console.log(this.state.gameID)
        this.setState({gameID: data['data'][0]['attributes']['name']})
        this.storeID(true)
      })
      .catch(err => this.storeID(false))
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, this.state);
  //  }

  render() {
    // const { callback } = this.props.route.params
    return (
      this.state.gameIDLoaded ? (
        <View style={styles.container}>
          {/* <Text>Game ID</Text> */}
          <TextInput style = {styles.input}
            placeholder = 'Enter your PUBG ID (case sensitive)'
            onChangeText= {(text) => this.handleGameID(text)}
            // defaultValue={text}
          />
          <TouchableOpacity
            style = {styles.submitButton}
            // onPress = {callback(this.state.typedGameID)}
            onPress = {() => this.checkIDValidity()}
          >
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
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
