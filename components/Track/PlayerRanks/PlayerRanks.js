import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "../Styles";

export default class PlayerRanks extends React.Component {
  state = {
    playerStats: null,
  };

  componentDidMount() {
    const { playerStats } = this.props.route.params;
    this.setState({playerStats: playerStats})
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


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Player Ranks</Text>
      </View>
    );
  }
}
