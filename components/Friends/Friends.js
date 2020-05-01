import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./FriendsStyles";

export default class Friends extends React.Component {
  componentDidMount() {}
  render() {
    const { ID } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{ID}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color="#000"
              onPress={() => console.log("Add a friend screen")}
            >
              <Text style={styles.buttonText}>Add a friend</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color="#000"
              onPress={() => console.log("Friends list screen")}
            >
              <Text style={styles.buttonText}>Friends List</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
