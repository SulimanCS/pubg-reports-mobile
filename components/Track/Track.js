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
import styles from "./Styles";

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
    update: null,
    lastGameID: null,
    lastGameObj: null,
    games: [],
  };

  async componentDidMount() {
    await this.getLastGameID();
    // console.log(this.state);
    this.state.update = setInterval(this.updateStats, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.state.update);
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

  updateStats = async () => {
    let lastGameID = this.state.lastGameID;
    await this.getLastGameID();
    if (lastGameID !== this.state.lastGameID) {
      console.log("NEW GAME FOUND");
      console.log("old= " + lastGameID);
      console.log("new= " + this.state.lastGameID);
      await this.getMatch(this.state.lastGameID, this.state.platform);
      let results = this.getPlayerStatsFromMatch(this.state.lastGameObj);
      if (results["roundPlayed"]) {
        this.setState({
          roundsPlayed: this.state.roundsPlayed + results["roundPlayed"],
        });
        if (results["wins"]) {
          this.setState({ wins: this.state.wins + results["wins"] });
        }
        if (results["kills"]) {
          this.setState({ kills: this.state.kills + results["kills"] });
        }
      }
    }
  };

  getMatch = async (matchID, platform) => {
    // prettier-ignore
    const url =
      `https://api.pubg.com/shards/${platform}/matches/${matchID}`;
    const response = await fetch(url, fetchOptions);
    const game = await response.json();
    this.setState({
      lastGameObj: game,
      games: [game, ...this.state.games],
    });
  };

  getPlayerStatsFromMatch = (matchObj) => {
    const players = matchObj["included"];
    let kills = 0;
    let roundPlayed = 0;
    let wins = 0;
    players.forEach((element) => {
      const attributes = element["attributes"];
      if (attributes.hasOwnProperty("stats")) {
        const stats = attributes["stats"];
        if (stats.hasOwnProperty("name")) {
          if (stats["name"] == this.state.ID) {
            roundPlayed += 1;
            kills += stats["kills"];
            if (stats["winPlace"] === 1) {
              wins += 1;
            }
          }
        }
      }
    });
    return {
      "roundPlayed": roundPlayed,
      "wins": wins,
      "kills": kills,
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
            data={this.state.roundsPlayed}
            short={false}
          />
          <View style={styles.row}>
            <this.generateSuface
              title="Kills: "
              data={this.state.kills}
              short={true}
            />
            <this.generateSuface
              title="Wins : "
              data={this.state.wins}
              short={true}
            />
          </View>
        </View>
        <Text style={[styles.titleText, styles.sectionTextMargin]}>
          Options
        </Text>
        <this.generateOptionSuface
          title="View Game Reports"
          nav={() =>
            navigation.navigate("Games", {
              ID: this.state.ID,
              platform: this.state.platform,
              games: this.state.games,
            })
          }
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
