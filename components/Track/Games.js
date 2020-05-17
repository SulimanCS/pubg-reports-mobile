import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import styles from "./TrackStyles";

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

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tracking:{" "}
          {" " + this.state.ID + " " + "(" + this.state.platform + ")"}
        </Text>
      </View>
    );
  }
}
