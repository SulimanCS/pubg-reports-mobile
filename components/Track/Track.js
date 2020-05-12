import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./TrackStyles";

export default class Track extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Track</Text>
      </View>
    );
  }
}
