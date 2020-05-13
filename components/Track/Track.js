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
import TOKEN from "../../TOKEN";
import styles from "./TrackStyles";

const fetchOptions = {
  headers: {
    "Authorization": "Bearer " + TOKEN,
    "Accept": "application/vnd.api+json",
  },
};

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

function ReportIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="file-invoice"
      className="prefix__svg-inline--fa prefix__fa-file-invoice prefix__fa-w-12"
      viewBox="0 0 384 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"
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
    test: null,
    lastGameID: null,
  };

  async componentDidMount() {
    await this.getLastGameID();
  }

  getLastGameID = async () => {
    // prettier-ignore
    const url =
      `https://api.pubg.com/shards/${this.state.platform}/players?filter[playerNames]=${this.state.ID}`;

    const response = await fetch(url, fetchOptions);
    const profile = await response.json();
    const lastGame = profile["data"][0]["relationships"]["matches"]["data"][0];
    if (lastGame === undefined) {
      this.setState({
        lastGameID: null,
      });
    } else {
      this.setState({
        lastGameID: typeof lastGame["id"] === "string" ? lastGame["id"] : null,
      });
    }
  };

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
    const { navigation } = this.props;
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
            <this.generateSuface title="Kills: " data="temp" short={true} />
            <this.generateSuface title="Wins : " data="temp" short={true} />
          </View>
        </View>
        <Text style={[styles.titleText, styles.sectionTextMargin]}>
          Options
        </Text>
        <this.generateOptionSuface
          title="View Game Reports"
          nav={() => navigation.navigate("Home")}
          icon={ReportIcon}
          iconColor="#000"
        />
        <this.generateOptionSuface
          title="Stop Tracking"
          nav={() => navigation.navigate("Home")}
          icon={StopIcon}
          iconColor="#A0060F"
        />
      </View>
    );
  }
}
