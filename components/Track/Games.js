import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import styles from "./TrackStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class Games extends React.Component {
  state = {
    games: [],
  };
  componentDidMount() {
    const { games } = this.props.route.params;
    const { ID } = this.props.route.params;
    const { platform } = this.props.route.params;
    this.setState({
      ID: ID,
      platform: platform,
      games: games,
    });
  }
  generateGameSuface = (options) => {
    const lostBG = { backgroundColor: "#A0060F" };
    const lostColor = { color: "#fff" };
    const wonBG = { backgroundColor: "#0E7A0D" };
    const wonColor = { color: "#F0E68C" };

    const background = options.rank === 1 ? wonBG : lostBG;
    const title = options.rank === 1 ? "WON" : "LOST";
    const color = options.rank === 1 ? wonColor : lostColor;

    return (
      <Surface style={[styles.surfaceLong, background]}>
        <TouchableOpacity>
          <View
            style={[styles.textCentered, { justifyContent: "space-between" }]}
          >
            <Text
              style={[styles.surfaceText, color]}
            >{`#${options.rank}`}</Text>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <Text style={[styles.surfaceText, color]}>{title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  };

  rednerGames = (game, index) => {
    const players = game["included"];
    let rank = 100;
    let playerStats = null;
    players.forEach((element) => {
      const attributes = element["attributes"];
      if (attributes.hasOwnProperty("stats")) {
        const stats = attributes["stats"];
        if (stats.hasOwnProperty("name")) {
          if (stats["name"] == this.state.ID) {
            playerStats = stats;
            rank = stats["winPlace"];
          }
        }
      }
    });
    return (
      <View key={index}>
        <this.generateGameSuface rank={rank} />
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tracking:{" "}
          {" " + this.state.ID + " " + "(" + this.state.platform + ")"}
        </Text>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.optionsContainer}>
            {this.state.games.map(this.rednerGames)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
