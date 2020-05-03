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
    justifyContent: "space-between",
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
  icon: {
    color: "#000",
    width: 30,
    height: 30,
    marginRight: 13.5,
  },
  xboxIcon: {
    color: "#fff",
    width: 25,
    height: 25,
  },
  playstationIcon: {
    color: "#fff",
    width: 30,
    height: 27,
  },
});

export default styles;
