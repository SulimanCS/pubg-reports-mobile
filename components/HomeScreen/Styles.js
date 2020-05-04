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
  row: {
    flex: 0.29,
    flexDirection: "row",
    marginTop: 76,
    right: 4.8,
  },
  margins: {
    marginLeft: 20,
    marginRight: 20,
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
  trackIcon: {
    color: "#000",
    width: 100,
    height: 100,
  },
  idIcon: {
    color: "#000",
    width: 88,
    height: 78,
    marginTop: 10,
  },
  idText: {
    top: 20.5,
    fontFamily: "ACB",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 21,
    textTransform: "uppercase",
    color: "#A0060F",
  },
  trackText: {
    top: 10,
    fontFamily: "ACB",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 21,
    textTransform: "uppercase",
    color: "#A0060F",
  },
  vertSeparator: {
    width: 5,
    height: 128,
    bottom: 10,
  },
});

export default styles;
