import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./FriendStyles";

export default class Friend extends React.Component {
  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    const { profile } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>FRIEND: {" " + profile.gameID}</Text>
      </View>
    );
  }
}
