import { StyleSheet } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


const firstScreenStyles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'column',
    height: '87%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  surfaceContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  surface: {
    marginTop: 10,
    width: wp('45%'),
    padding: 8,
    height: 80,
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 10
  },
  surfaceText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333'
  }
});

export default firstScreenStyles;