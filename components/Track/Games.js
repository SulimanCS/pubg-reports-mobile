import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./TrackStyles";

export default class Games extends React.Component {
  render() {
    const { navigation } = this.props;
    const { ID } = this.props.route.params;
    const { platform } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tracking: {" " + ID + " " + "(" + platform + ")"}
        </Text>
      </View>
    );
  }
}
