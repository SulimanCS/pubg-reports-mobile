import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import Svg, { Path } from "react-native-svg";

function RanksIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="list-ol"
      className="prefix__svg-inline--fa prefix__fa-list-ol prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M61.77 401l17.5-20.15a19.92 19.92 0 005.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 00-8 8v16a8 8 0 008 8h22.83a157.41 157.41 0 00-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 01-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zM16 160h64a8 8 0 008-8v-16a8 8 0 00-8-8H64V40a8 8 0 00-8-8H32a8 8 0 00-7.14 4.42l-8 16A8 8 0 0024 64h8v64H16a8 8 0 00-8 8v16a8 8 0 008 8zm-3.91 160H80a8 8 0 008-8v-16a8 8 0 00-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 019.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
      />
    </Svg>
  );
}

function characterIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="user-secret"
      className="prefix__svg-inline--fa prefix__fa-user-secret prefix__fa-w-14"
      viewBox="0 0 448 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"
      />
    </Svg>
  );
}

export default class GameReport extends React.Component {
  state = {
    ID: null,
    platform: null,
    playerStats: null,
  };

  componentDidMount() {
    const { ID } = this.props.route.params;
    const { platform } = this.props.route.params;
    this.setState({
      ID: ID,
      platform: platform,
    });
  }

  generateOptionSuface = (options) => {
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

  fetchPlayerRanks = (matchObj) => {
    const players = matchObj["included"];
    let playerStats = [];

    players.forEach((element) => {
      const attributes = element["attributes"];
      if (attributes.hasOwnProperty("stats")) {
        const stats = attributes["stats"];
        if (stats.hasOwnProperty("name")) {
          playerStats.push(stats);
        }
      }
    });
    this.setState({ playerStats: playerStats });
  };

  navigateToRanks = () => {
    const { game } = this.props.route.params;
    if (this.state.playerStats == null) {
      this.fetchPlayerRanks(game);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tracking:{" "}
          {" " + this.state.ID + " " + "(" + this.state.platform + ")"}
        </Text>
        <this.generateOptionSuface
          title="Your stats"
          nav={() => navigation.navigate("Home")}
          icon={characterIcon}
          iconColor="#000"
        />
        <this.generateOptionSuface
          title="Player ranks"
          nav={this.navigateToRanks}
          icon={RanksIcon}
          iconColor="#000"
        />
      </View>
    );
  }
}
