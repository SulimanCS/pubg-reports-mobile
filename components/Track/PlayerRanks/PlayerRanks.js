import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "../Styles";

export default class PlayerRanks extends React.Component {
  constructor(props) {
    super(props);
    const { playerStats } = this.props.route.params;
    this.state = { playerStats: Array.isArray(playerStats) ? playerStats : [] };
  }

  generatePlayerSurface = (options) => {
    return (
      <Surface style={styles.surfaceLong}>
        <TouchableOpacity>
          <View
            style={[styles.textCentered, { justifyContent: "space-between" }]}
          >
            <Text style={styles.surfaceText}>{`#${options.rank}`}</Text>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <Text style={styles.surfaceText}>{options.playerName}</Text>
            </View>
            <View>
              <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                {options.kills}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  };

  rednerPlayers = (player, index) => {
    return (
      <View key={index}>
        <this.generatePlayerSurface
          rank={player.winPlace}
          playerName={player.name}
          kills={player.kills}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Player ranks</Text>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.optionsContainer}>
            {this.state.playerStats.map(this.rednerPlayers)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
