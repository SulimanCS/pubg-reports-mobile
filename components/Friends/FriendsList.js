import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./FriendsListStyles";

export default class Friends extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Friends List</Text>
      </View>
    );
  }
}
