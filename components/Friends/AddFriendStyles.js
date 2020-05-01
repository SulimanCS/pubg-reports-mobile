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
  inputContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 15,
  },
  icon: {
    color: "grey",
    width: 65,
    height: 65,
    marginRight: 13.5,
    marginLeft: 13.5,
    marginBottom: 10,
  },
  xboxIcon: {
    top: 3,
    width: 55,
    height: 55,
  },
  selected: {
    color: "#000",
  },
  selectedXbox: {
    color: "#0e7a0d",
  },
  selectedPlaystation: {
    color: "#003087",
  },
  submitButtonText: {
    fontFamily: "ACB",
    fontStyle: "normal",
    lineHeight: 21,
  },
});

export default styles;
