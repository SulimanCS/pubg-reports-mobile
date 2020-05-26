import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "./PlayerGameStatsStyles";

export default class PlayerGameStats extends React.Component {
  generateStatSurface = (options) => {
    const container = options.short ? styles.surfaceContainer : null;
    const type = options.short ? styles.surface : styles.surfaceLong;
    return (
      <View style={container}>
        <Surface style={type}>
          <View style={styles.textCentered}>
            <View>
              <Text style={styles.surfaceText}>{options.title}: </Text>
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
    const { playerStats } = this.props.route.params;
    const ID = playerStats["name"];

    // short surface
    const rank = playerStats["winPlace"];
    const killRank = playerStats["killPlace"];
    const kills = playerStats["kills"];
    const assists = playerStats["assists"];
    const heals = playerStats["heals"];
    const revives = playerStats["revives"];

    // long surface
    const timeSurvived = parseInt(playerStats["timeSurvived"]) + "S";
    const damageDealt = parseInt(playerStats["damageDealt"]);
    const killStreaks = parseInt(playerStats["killStreaks"]);
    const longestKill = parseInt(playerStats["longestKill"]) + "M";
    const walkDistance = parseInt(playerStats["walkDistance"]) + "M";
    const rideDistance = parseInt(playerStats["rideDistance"]) + "M";

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Player stats: {ID}</Text>
        <ScrollView style={{ width: "95%" }}>
          <View style={styles.optionsContainer}>
            <View style={styles.row}>
              <this.generateStatSurface title="rank" data={rank} short={true} />
              <this.generateStatSurface
                title="kill rank"
                data={killRank}
                short={true}
              />
            </View>
            <View style={styles.row}>
              <this.generateStatSurface
                title="kills"
                data={kills}
                short={true}
              />
              <this.generateStatSurface
                title="assists"
                data={assists}
                short={true}
              />
            </View>
            <View style={styles.row}>
              <this.generateStatSurface
                title="heals"
                data={heals}
                short={true}
              />
              <this.generateStatSurface
                title="revives"
                data={revives}
                short={true}
              />
            </View>
            <this.generateStatSurface
              title="time survived"
              data={timeSurvived}
              short={false}
            />
            <this.generateStatSurface
              title="damage dealt"
              data={damageDealt}
              short={false}
            />
            <this.generateStatSurface
              title="kill streaks"
              data={killStreaks}
              short={false}
            />
            <this.generateStatSurface
              title="longest kill"
              data={longestKill}
              short={false}
            />
            <this.generateStatSurface
              title="walk distance"
              data={walkDistance}
              short={false}
            />
            <this.generateStatSurface
              title="ride distance"
              data={rideDistance}
              short={false}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
