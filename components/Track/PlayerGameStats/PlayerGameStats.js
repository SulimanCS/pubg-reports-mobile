import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "./PlayerGameStatsStyles";

export default class PlayerGameStats extends React.Component {
  generateStatSurface = (options) => {
    return (
      <View style={styles.surfaceContainer}>
        <Surface style={styles.surface}>
          <View style={styles.textCentered}>
            <View>
              <Text style={styles.surfaceText}>{options.title}: </Text>
            </View>
            <View>
              <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                {" "}
                {options.data}
              </Text>
            </View>
          </View>
        </Surface>
      </View>
    );
  };

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
