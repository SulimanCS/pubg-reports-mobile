import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleText: {
    marginTop: hp("5%"),
    fontFamily: "ACB",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 21,
    textTransform: "uppercase",
    color: "#A0060F",
  },
  optionsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textCentered: {
    flexDirection: "row",
    justifyContent: "center",
  },
  surfaceText: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: "ACB",
    fontStyle: "normal",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
  },
  surfaceLong: {
    marginTop: 10,
    width: wp("92%"),
    padding: 8,
    height: 80,
    justifyContent: "center",
    elevation: 4,
    borderRadius: 15,
  },
});

export default styles;
