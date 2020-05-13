import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Surface } from "react-native-paper";
import styles from "./TrackStyles";

function StopIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="stop"
      className="prefix__svg-inline--fa prefix__fa-stop prefix__fa-w-14"
      viewBox="0 0 448 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
      />
    </Svg>
  );
}

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

  generateOptionSuface = (options) => {
    // const Icon = (options.StopIcon}
    return (
      <View>
        <Surface style={[styles.surfaceLong]}>
          <TouchableOpacity onPress={options.nav}>
            <View
              style={[styles.textCentered, { justifyContent: "space-between" }]}
            >
              <View>
                <Text style={[styles.surfaceText, { marginLeft: 10 }]}>
                  {options.title}
                </Text>
              </View>
              <View>
                <options.icon
                  style={[styles.icon, { color: options.iconColor }]}
                />
              </View>
            </View>
          </TouchableOpacity>
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
