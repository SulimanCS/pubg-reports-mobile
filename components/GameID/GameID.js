import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class GameID extends React.Component {

  state = {
    gameID: ''
  };

  handleGameID = (text) => {
    this.setState({gameID: text})
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, this.state);
  //  }

  render() {
    const { callback } = this.props.route.params
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
          // onPress = {this.props.route.params.callback(this.state.gameID)}
          onPress = {callback(this.state.gameID)}
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
