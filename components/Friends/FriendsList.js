import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./FriendsListStyles";

export default class Friends extends React.Component {
  state = {
    friends: [],
    friendsLoaded: false,
  };

  async componentDidMount() {
    this.setState({
      friendsLoaded: true,
    });
  }

    );
  render() {
    return this.state.friendsLoaded ? (
      this.state.friends.length == 0 ? (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Text style={[styles.titleText, { marginTop: 0 }]}>
            Your Friends List Is Empty
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>Friends List</Text>
        </View>
      )
    ) : null;
  }
}
