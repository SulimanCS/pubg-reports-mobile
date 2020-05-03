import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Surface } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import styles from "./FriendsListStyles";

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
    console.log(lastAddedFriendID);
    if (lastAddedFriendID == null) return;
    console.log("for oo");
    for (let i = 1; i < lastAddedFriendID + 1; i++) {
      console.log(i);
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
    console.log(this.state.friends);
  };

  renderFriends = (friend, index) => {
    return (
      <View key={index}>
        <Surface style={styles.surfaceLong}>
          <View style={styles.textCentered}>
            <View>
              <Text style={styles.surfaceText}>{friend["gameID"]} </Text>
            </View>
            {/* <View>
              <Text style={[styles.surfaceText, { color: "#A0060F" }]}>
                {" "}
                test
              </Text>
            </View> */}
          </View>
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
            <View style={styles.optionsContainer}>
              {this.state.friends.map(this.renderFriends)}
            </View>
          </ScrollView>
        </View>
      )
    ) : null;
  }
}
