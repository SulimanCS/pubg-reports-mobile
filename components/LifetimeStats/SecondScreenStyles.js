import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const secondScreenStyles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "column",
    height: "79%",
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    marginTop: 10,
    width: wp("65%"),
    padding: 8,
    height: 80,
    justifyContent: "center",
    elevation: 4,
    borderRadius: 15,
  },
});

export default secondScreenStyles;
