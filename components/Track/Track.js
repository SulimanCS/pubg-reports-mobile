import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Surface } from "react-native-paper";
import styles from "./TrackStyles";

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.value,
      duration: props.duration,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

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
      // <FadeInView duration={1450} value={1}></FadeInView>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tracking:{" "}
          {" " + this.state.ID + " " + "(" + this.state.platform + ")"}
        </Text>
        <Text style={[styles.titleText, styles.sectionTextMargin]}>
          Session stats
        </Text>
        <View style={styles.optionsContainer}>
          <this.generateSuface
            title="Rounds Played: "
            data="temp"
            short={false}
          />
          <View style={styles.row}>
            <this.generateSuface title="Wins: " data="temp" short={true} />
            <this.generateSuface title="Wins : " data="temp" short={true} />
          </View>
        </View>
        <Text style={[styles.titleText, styles.sectionTextMargin]}>
          Options
        </Text>
        <this.generateSuface
          title="Stop Tracking: "
          data="temp"
          short={false}
        />
        <this.generateSuface
          title="View Game Reports: "
          data="temp"
          short={false}
        />
      </View>
    );
  }
}
