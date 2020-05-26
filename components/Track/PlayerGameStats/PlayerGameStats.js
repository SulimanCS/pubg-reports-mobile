import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "./PlayerGameStatsStyles";

export default class PlayerGameStats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Player stats: {"temp"}</Text>
        <ScrollView>
          <View style={styles.optionsContainer}>
            <View style={styles.row}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
