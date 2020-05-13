import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Surface } from "react-native-paper";
import styles from "./TrackStyles";

export default class Track extends React.Component {
  state = {
    ID: this.props.route.params.ID,
    accountID: this.props.route.params.longID,
    platform: this.props.route.params.platform,
    roundsPlayed: 0,
    wins: 0,
    kills: 0,
  };

  generateSuface = (options) => {
    const type = options.short ? styles.surface : styles.surfaceLong;
    const container = options.short ? styles.surfaceContainer : null;
    return (
      <View style={container}>
        <Surface style={type}>
          <View style={styles.textCentered}>
            <View>
              <Text style={styles.surfaceText}>{options.title}</Text>
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
        <Text style={styles.titleText}>
          Tracking:{" "}
          {" " + this.state.ID + " " + "(" + this.state.platform + ")"}
        </Text>
        <Text style={[styles.titleText, styles.sectionTextMargin]}>
          Session stats
        </Text>
        <View style={styles.optionsContainer}>
          <FadeInView duration={1450} value={1}>
            <this.generateSuface
              title="Rounds Played: "
              data="temp"
              short={false}
            />
          </FadeInView>
          <FadeInView duration={1450} value={1}>
            <View style={styles.row}>
              <this.generateSuface title="Wins: " data="temp" short={true} />
              <this.generateSuface title="Wins : " data="temp" short={true} />
            </View>
          </FadeInView>
        </View>
      </View>
    );
  }
}
