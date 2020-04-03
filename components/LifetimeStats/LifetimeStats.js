
import React, { useState, useEffect } from 'react';
import { Animated, YellowBox, StyleSheet, Alert, Text, View, TouchableOpacity } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Surface, Button } from 'react-native-paper';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: props.value,
        duration: props.duration,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeOutView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(1))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: props.value,
        duration: props.duration,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default class LifetimeStats extends React.Component {

  state = {
    firstChoice: true
  }

  handleClick = () => {
    console.log('hi')
    this.setState({firstChoice: false})
    setTimeout(() => console.log('timeout'), 1550)
  }

  render() {
    const { ID } = this.props.route.params
    return (
      this.state.firstChoice ? (
        <View style={styles.container}>
          <Text style={styles.titleText}>{ID}</Text>
          <FadeInView duration={1450} value={1}>
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={this.handleClick}>
                <View style={styles.surfaceContainer}>
                  <Surface style={styles.surface}>
                        <Text style={styles.surfaceText}>FPP</Text>
                  </Surface>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('TPP hit')}>
                <View style={styles.surfaceContainer}>
                  <Surface style={styles.surface}>
                        <Text style={styles.surfaceText}>TPP</Text>
                  </Surface>
                </View>
              </TouchableOpacity>
            </View>
          </FadeInView>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>{ID}</Text>
          <FadeOutView duration={1450} value={0}>
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={this.handleClick}>
                <View style={styles.surfaceContainer}>
                  <Surface style={styles.surface}>
                        <Text style={styles.surfaceText}>FPP</Text>
                  </Surface>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('TPP hit')}>
                <View style={styles.surfaceContainer}>
                  <Surface style={styles.surface}>
                        <Text style={styles.surfaceText}>TPP</Text>
                  </Surface>
                </View>
              </TouchableOpacity>
            </View>
          </FadeOutView>
        </View>
      )
    );
  }
}

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
  },
  optionsContainer: {
    flexDirection: 'row',
    height: '87%',
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
    color: '#333'
  }
});
