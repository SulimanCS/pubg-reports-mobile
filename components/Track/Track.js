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

  };
  componentDidMount() {}

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
            <View>
              <Surface style={styles.surfaceLong}>
                <View style={styles.textCentered}>
                  <View>
                    <Text style={styles.surfaceText}>Rounds Played: </Text>
                  </View>
                  <View>
                    <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                      {" "}
                      {"temp"}
                    </Text>
                  </View>
                </View>
              </Surface>
            </View>
          </FadeInView>
          <FadeInView duration={1450} value={1}>
            <View style={styles.row}>
              <View style={styles.surfaceContainer}>
                <Surface style={styles.surface}>
                  <View style={styles.textCentered}>
                    <View>
                      <Text style={styles.surfaceText}>Kills: </Text>
                    </View>
                    <View>
                      <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                        {" "}
                        {"temp"}
                      </Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={styles.surfaceContainer}>
                <Surface style={styles.surface}>
                  <View style={styles.textCentered}>
                    <View>
                      <Text style={styles.surfaceText}>Assists: </Text>
                    </View>
                    <View>
                      <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                        {" "}
                        {"temp"}
                      </Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
        </View>
      </View>
    );
  }
}
