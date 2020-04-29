import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    position: 'absolute',
    width: 112,
    height: 30,
    left: 146,
    top: 50,
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    textTransform: "uppercase",
    color: '#A0060F'
  },
  trackIcon: {
    color: '#000',
    position: 'absolute',
    width: 100,
    height: 100,
    left: 47,
    top: 137,
  },
  idIcon: {
    color: '#000',
    position: 'absolute',
    width: 88,
    height: 78,
    left: 232,
    top: 146,
  },
  trackText: {
    position: 'absolute',
    width: 86,
    height: 30,
    left: 80,
    top: 241,
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    textTransform: "uppercase",
    color: '#A0060F'
  },
  idText: {
    position: 'absolute',
    width: 86,
    height: 30,
    left: 254,
    top: 241,
    fontFamily: 'ACB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    textTransform: "uppercase",
    color: '#A0060F'
  },
  vertSeparator: {
    position: 'absolute',
    width: 5,
    height: 128,
    left: 185,
    top: 122,
  },
  horizSeparator: {
    position: 'absolute',
    width: 5,
    height: 215.85,
    left: 83.5,
    top: 285,
  }
});

export default styles;
