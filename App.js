import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import GameID from "./components/GameID/GameID";
import LifetimeStats from "./components/LifetimeStats/LifetimeStats";
import Friends from "./components/Friends/Friends";
import AddFriend from "./components/Friends/AddFriend";
import FriendsList from "./components/Friends/FriendsList";
import Friend from "./components/Friends/Friend";
import Track from "./components/Track/Track";
import Games from "./components/Track/Games";
import GameReport from "./components/Track/GameReport";
import PlayerRanks from "./components/Track/PlayerRanks/PlayerRanks";
import PlayerGameStats from "./components/Track/PlayerGameStats/PlayerGameStats";

const Stack = createStackNavigator();

const removeHeader = {
  headerShown: false,
};

const disableSwipeBack = {
  gestureEnabled: false,
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={removeHeader}
          />
          <Stack.Screen
            name="Game ID"
            component={GameID}
            options={removeHeader}
          />
          <Stack.Screen
            name="LifetimeStats"
            component={LifetimeStats}
            options={removeHeader}
          />
          <Stack.Screen
            name="Friends"
            component={Friends}
            options={removeHeader}
          />
          <Stack.Screen
            name="AddFriend"
            component={AddFriend}
            options={removeHeader}
          />
          <Stack.Screen
            name="FriendsList"
            component={FriendsList}
            options={removeHeader}
          />
          <Stack.Screen
            name="Friend"
            component={Friend}
            options={removeHeader}
          />
          {/* prettier-ignore */}
          <Stack.Screen
            name="Track"
            component={Track}
            options={{ ...removeHeader, ...disableSwipeBack }}
          />
          <Stack.Screen name="Games" component={Games} options={removeHeader} />
          <Stack.Screen
            name="GameReport"
            component={GameReport}
            options={removeHeader}
          />
          <Stack.Screen
            name="PlayerRanks"
            component={PlayerRanks}
            options={removeHeader}
          />
          <Stack.Screen
            name="PlayerGameStats"
            component={PlayerGameStats}
            options={removeHeader}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
