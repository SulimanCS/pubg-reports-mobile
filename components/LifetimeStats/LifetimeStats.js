
import React, { useState, useEffect } from 'react';
import { Animated, YellowBox, Alert, Text, View, TouchableOpacity } from 'react-native';
import { Surface, Button } from 'react-native-paper';
import styles from './Styles'
import firstScreenStyles from './FirstScreenStyles'

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
    firstChoiceScreen: true,
    firstChoice: null,
    secondChoiceScreen: false
  }

  handleClickFirstScreen = (choice) => {
    this.setState({
      firstChoiceScreen: false,
      firstChoice: choice
    })
    setTimeout(() => {
      console.log('timeout')
      this.setState({secondChoiceScreen: true})
    }, 1550)
  }

  render() {
    const { ID } = this.props.route.params
    return (
      this.state.firstChoiceScreen ? (
        <View style={styles.container}>
          <Text style={styles.titleText}>{ID}</Text>
          <FadeInView duration={1450} value={1}>
            <View style={firstScreenStyles.optionsContainer}>
              <View>
                <Text style={firstScreenStyles.surfaceText}>Select  a  mode</Text>
              </View>
              <View style={firstScreenStyles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.handleClickFirstScreen('FPP')}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={firstScreenStyles.surfaceText}>FPP</Text>
                    </Surface>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClickFirstScreen('TPP')}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={firstScreenStyles.surfaceText}>TPP</Text>
                    </Surface>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </FadeInView>
        </View>
      ) : (
        !this.state.secondChoiceScreen ? (
          <View style={styles.container}>
            <Text style={styles.titleText}>{ID}</Text>
            <FadeOutView duration={1450} value={0}>
              <View style={firstScreenStyles.optionsContainer}>
                <View>
                  <Text style={firstScreenStyles.surfaceText}>Select  a  mode</Text>
                </View>
                <View style={firstScreenStyles.buttonsContainer}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={firstScreenStyles.surfaceText}>FPP</Text>
                    </Surface>
                  </View>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={firstScreenStyles.surfaceText}>TPP</Text>
                    </Surface>
                  </View>
                </View>
              </View>
            </FadeOutView>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.titleText}>{ID}</Text>
          </View>
        )
      )
    );
  }
}
