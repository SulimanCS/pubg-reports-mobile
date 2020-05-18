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
    color: "#A0060F",
  },
  buttonsContainer: {
    flexDirection: "row",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 130,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonText: {
    fontFamily: "ACB",
    fontStyle: "normal",
    lineHeight: 21,
  },
  addIcon: {
    color: "#000",
    width: 65,
    height: 65,
    marginBottom: 9,
    left: 5,
  },
  friendsIcon: {
    color: "#000",
    width: 75,
    height: 75,
  },
  iconText: {
    top: 10,
    fontFamily: "ACB",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 21,
    textTransform: "uppercase",
    color: "#A0060F",
  },
});

export default styles;
