import React from "react";
import {
  YellowBox,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import TOKEN from "../../TOKEN";
import Svg, { Path } from "react-native-svg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Button } from "react-native-paper";
import styles from "./UserInfoStyles";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
]);

function UnlinkIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="unlink"
      className="prefix__svg-inline--fa prefix__fa-unlink prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"
      />
    </Svg>
  );
}

function StatsIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="chart-bar"
      className="prefix__svg-inline--fa prefix__fa-chart-bar prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
      />
    </Svg>
  );
}

export default class UserInfo extends React.Component {
  deleteID = () => {
    SecureStore.deleteItemAsync("gameID");
    SecureStore.deleteItemAsync("accountID");
    SecureStore.deleteItemAsync("accountPlatform");
    this.props.callback(null, null, null);
  };

  unlinkID = () => {
    const { navigation } = this.props;
    this.deleteID();
    navigation.navigate("Home");
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.props.ID}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                onPress={this.unlinkID}
                style={{ alignItems: "center" }}
              >
                <UnlinkIcon style={styles.unlinkIcon} />
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.iconText}>Unlink</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LifetimeStats", {
                    ID: this.props.ID,
                    longID: this.props.longID,
                    platform: this.props.platform,
                  });
                }}
                style={{ alignItems: "center" }}
              >
                <StatsIcon style={styles.statsIcon} />
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.iconText}>Lifetime Stats</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
