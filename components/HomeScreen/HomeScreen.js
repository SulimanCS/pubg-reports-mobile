import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Svg, { Path } from "react-native-svg"

function TrackIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="crosshairs"
      className="prefix__svg-inline--fa prefix__fa-crosshairs prefix__fa-w-16"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"
      />
    </Svg>
  )
}

function IDIcon(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="id-card"
      className="prefix__svg-inline--fa prefix__fa-id-card prefix__fa-w-18"
      viewBox="0 0 576 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"
      />
    </Svg>
  )
}

function VertSeparator(props) {
  return (
    <Svg width={5} height={128} viewBox="0 0 5 128" fill="none" {...props}>
      <Path fill="#000" d="M0 0h5v128H0z" />
    </Svg>
  )
}

function HorizSeparator(props) {
  return (
    <Svg width={216} height={6} viewBox="0 0 216 6" fill="none" {...props}>
      <Path fill="#000" d="M215.862 0l.001 5L.001 5.063 0 .063z" />
    </Svg>
  )
}

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'ACR': require('../../assets/fonts/AsapCondensed-Regular.ttf'),
      'ACB': require('../../assets/fonts/AsapCondensed-Bold.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <Text style={styles.titleText}>PUBG Reports</Text>
          <TrackIcon style={styles.trackIcon}/>
          <IDIcon style={styles.idIcon}/>
          <VertSeparator style={styles.vertSeparator}/>
          <HorizSeparator style={styles.horizSeparator}/>
          <Text style={styles.trackText}>Track</Text>
          <Text style={styles.idText}>PUBG ID</Text>
        </View>
      ) : null
    );
  }
}

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