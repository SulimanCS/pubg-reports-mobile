import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, Text, View, ScrollView } from "react-native";
import { Surface } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import Svg, { Path } from "react-native-svg";
import styles from "./FriendsListStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

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

function SteamIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="steam-symbol"
      className="prefix__svg-inline--fa prefix__fa-steam-symbol prefix__fa-w-14"
      viewBox="0 0 448 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"
      />
    </Svg>
  );
}

function XboxIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="xbox"
      className="prefix__svg-inline--fa prefix__fa-xbox prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"
      />
    </Svg>
  );
}

function PlaystationIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="playstation"
      className="prefix__svg-inline--fa prefix__fa-playstation prefix__fa-w-18"
      viewBox="0 0 576 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"
      />
    </Svg>
  );
}

export default class Friends extends React.Component {
  state = {
    friends: [],
    friendsLoaded: false,
  };

  async componentDidMount() {
    await this.loadFriends();
    this.setState({
      friendsLoaded: true,
    });
  }

  loadFriends = async () => {
    const lastAddedFriendIDKey = "lastAddedFriendID";
    const lastAddedFriendID = parseInt(
      await SecureStore.getItemAsync(lastAddedFriendIDKey)
    );
    if (lastAddedFriendID == null) return;
    for (let i = 1; i < lastAddedFriendID + 1; i++) {
      const friendGameIDKey = "Friend" + i + "gameID";
      const friendAccountIDKey = "Friend" + i + "accountID";
      const friendPlatformKey = "Friend" + i + "platform";

      const gameID = await SecureStore.getItemAsync(friendGameIDKey);
      const accountID = await SecureStore.getItemAsync(friendAccountIDKey);
      const platform = await SecureStore.getItemAsync(friendPlatformKey);

      const frinedObject = {
        gameID: gameID,
        accountID: accountID,
        platform: platform,
      };
      this.state.friends.push(frinedObject);
    }
    // console.log(this.state.friends);
  };

  surfaceColor = (platform) => {
    switch (platform) {
      case "xbox":
        return { backgroundColor: "#0e7a0d" };
      case "playstation":
        return { backgroundColor: "#003087" };
      default:
        // use default from FriendsListStyles.js
        return null;
    }
  };

  textColor = (platform) => {
    switch (platform) {
      case "xbox":
        return { color: "#fff" };
      case "playstation":
        return { color: "#fff" };
      default:
        // use default from FriendsListStyles.js
        return null;
    }
  };

  renderIcon = (platform) => {
    switch (platform) {
      case "xbox":
        return <XboxIcon style={[styles.icon, styles.xboxIcon]} />;
      case "playstation":
        return (
          <PlaystationIcon style={[styles.icon, styles.playstationIcon]} />
        );
      default:
        return <SteamIcon style={styles.icon} />;
    }
  };

  renderFriends = (friend, index) => {
    return (
      <View key={index}>
        <Surface
          style={[styles.surfaceLong, this.surfaceColor(friend["platform"])]}
        >
          <TouchableOpacity>
            <View style={styles.textCentered}>
              <View>
                <Text
                  style={[
                    styles.surfaceText,
                    this.textColor(friend["platform"]),
                  ]}
                >
                  {friend["gameID"]}
                </Text>
              </View>
              <View>{this.renderIcon(friend["platform"])}</View>
            </View>
          </TouchableOpacity>
        </Surface>
      </View>
    );
  };

  render() {
    return this.state.friendsLoaded ? (
      this.state.friends.length == 0 ? (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Text style={[styles.titleText, { marginTop: 0 }]}>
            Your Friends List Is Empty
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>Friends List</Text>
          <ScrollView style={{ width: "100%" }}>
            <FadeInView duration={1050} value={1}>
              <View style={styles.optionsContainer}>
                {this.state.friends.map(this.renderFriends)}
              </View>
            </FadeInView>
          </ScrollView>
        </View>
      )
    ) : (
      <View style={styles.container}>
        <Text style={styles.titleText}>Friends List</Text>
      </View>
    );
  }
}
