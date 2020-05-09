import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import styles from "./FriendStyles";

export default class Friend extends React.Component {
  componentDidMount() {}

  removeFriend = async () => {
    const { navigation } = this.props;
    const { profile } = this.props.route.params;
    const friendGameIDKey = "Friend" + profile.localStorageID + "gameID";
    const friendAccountIDKey = "Friend" + profile.localStorageID + "accountID";
    const friendPlatformKey = "Friend" + profile.localStorageID + "platform";

    await SecureStore.deleteItemAsync(friendGameIDKey);
    await SecureStore.deleteItemAsync(friendAccountIDKey);
    await SecureStore.deleteItemAsync(friendPlatformKey);

    navigation.navigate("Friends");
  };

  render() {
    const { navigation } = this.props;
    const { profile } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>FRIEND: {" " + profile.gameID}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button mode="contained" color="#000" onPress={this.removeFriend}>
              <Text style={styles.buttonText}>Remove</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color="#000"
              onPress={() =>
                navigation.navigate("LifetimeStats", {
                  ID: profile.gameID,
                  longID: profile.accountID,
                  platform: profile.platform,
                  fromFriends: true,
                })
              }
            >
              <Text style={styles.buttonText}>Lifetime Stats</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
