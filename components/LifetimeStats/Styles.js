import { StyleSheet } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    marginTop: hp('5%'),
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    color: '#A0060F'
  }
});

export default styles;