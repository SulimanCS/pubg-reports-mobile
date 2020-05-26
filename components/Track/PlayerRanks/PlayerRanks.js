import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "../Styles";

export default class PlayerRanks extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Player Ranks</Text>
      </View>
    );
  }
}
