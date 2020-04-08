import React, { useState, useEffect } from 'react';
import { Animated, YellowBox, Alert, Text, View, TouchableOpacity } from 'react-native';
import { Surface, Button } from 'react-native-paper';
import styles from './Styles'
import firstScreenStyles from './FirstScreenStyles'
import secondScreenStyles from './SecondScreenStyles'
import statsStyles from './StatsStyles'
import TOKEN from '../../TOKEN'

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
  const [fadeAnim] = useState(new Animated.Value(1))  // Initial value for opacity: 1

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
    ID: this.props.route.params.ID,
    platform: this.props.route.params.platform,
    accountID: this.props.route.params.longID,
    stats: null,
    firstChoiceScreen: true,
    firstChoice: null,
    secondChoiceScreen: false,
    secondChoice: null,
    lifetmeStatsScreen: false
  }
  async componentDidMount() {
    let options = {
      headers: {
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/vnd.api+json"
      }
    }
    let url = 'https://api.pubg.com/shards/' +
    this.state.platform + '/players/' + this.state.accountID
    + '/seasons/lifetime'
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        // console.log(data['data']['attributes']['gameModeStats'])
        this.setState({stats: data['data']['attributes']['gameModeStats']})
      })
      .catch(err => null)
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

  handleClickSecondScreen = (choice) => {
    this.setState({
      secondChoice: choice
    })
    setTimeout(() => {
      console.log('timeout')
      this.setState({lifetmeStatsScreen: true})
    }, 2550)
  }

  Stats = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.state.ID}</Text>
        <View style={statsStyles.optionsContainer}>
          <FadeInView duration={1450} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
          <FadeInView duration={1850} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
          <FadeInView duration={2250} value={1}>
            <View>
              <Surface style={statsStyles.surfaceLong}>
                <View style={statsStyles.textCentered}>
                  <View>
                    <Text style={statsStyles.surfaceText}>Info: </Text>
                  </View>
                  <View>
                    <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                  </View>
                </View>
              </Surface>
            </View>
          </FadeInView>
          <FadeInView duration={2850} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
          <FadeInView duration={3350} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
          <FadeInView duration={3850} value={1}>
            <View>
              <Surface style={statsStyles.surfaceLong}>
                <View style={statsStyles.textCentered}>
                  <View>
                    <Text style={statsStyles.surfaceText}>Info: </Text>
                  </View>
                  <View>
                    <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                  </View>
                </View>
              </Surface>
            </View>
          </FadeInView>
          <FadeInView duration={4450} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
          <FadeInView duration={4900} value={1}>
            <View style={statsStyles.row}>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
              <View style={statsStyles.surfaceContainer}>
                <Surface style={statsStyles.surface}>
                  <View style={statsStyles.textCentered}>
                    <View>
                      <Text style={statsStyles.surfaceText}>Info: </Text>
                    </View>
                    <View>
                      <Text style={[statsStyles.surfaceText, {color: '#A0060F'}]}> 1</Text>
                    </View>
                  </View>
                </Surface>
              </View>
            </View>
          </FadeInView>
        </View>
      </View>
    );
  }

  render() {
    return (
      this.state.firstChoiceScreen ? (
        <View style={styles.container}>
          <Text style={styles.titleText}>{this.state.ID}</Text>
          <FadeInView duration={1450} value={1}>
            <View style={firstScreenStyles.optionsContainer}>
              <View>
                <Text style={styles.surfaceText}>Select  a  mode</Text>
              </View>
              <View style={firstScreenStyles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.handleClickFirstScreen('FPP')}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={styles.surfaceText}>FPP</Text>
                    </Surface>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClickFirstScreen('TPP')}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={styles.surfaceText}>TPP</Text>
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
            <Text style={styles.titleText}>{this.state.ID}</Text>
            <FadeOutView duration={1450} value={0}>
              <View style={firstScreenStyles.optionsContainer}>
                <View>
                  <Text style={styles.surfaceText}>Select  a  mode</Text>
                </View>
                <View style={firstScreenStyles.buttonsContainer}>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={styles.surfaceText}>FPP</Text>
                    </Surface>
                  </View>
                  <View style={firstScreenStyles.surfaceContainer}>
                    <Surface style={firstScreenStyles.surface}>
                          <Text style={styles.surfaceText}>TPP</Text>
                    </Surface>
                  </View>
                </View>
              </View>
            </FadeOutView>
          </View>
        ) : (
          !this.state.secondChoice ? (
            <View style={styles.container}>
              <Text style={styles.titleText}>{this.state.ID}</Text>
                <View style={secondScreenStyles.optionsContainer}>
                  <TouchableOpacity onPress={() => this.handleClickSecondScreen('Solo')}>
                    <FadeInView duration={1450} value={1}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Solo</Text>
                        </Surface>
                      </View>
                    </FadeInView>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handleClickSecondScreen('Duo')}>
                    <FadeInView duration={1850} value={1}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Duo</Text>
                        </Surface>
                      </View>
                    </FadeInView>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handleClickSecondScreen('Squads')}>
                    <FadeInView duration={2250} value={1}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Squads</Text>
                        </Surface>
                      </View>
                    </FadeInView>
                  </TouchableOpacity>
                </View>
            </View>
          ) : (
            !this.state.lifetmeStatsScreen ? (
              <View style={styles.container}>
                <Text style={styles.titleText}>{this.state.ID}</Text>
                  <View style={secondScreenStyles.optionsContainer}>
                    <FadeOutView duration={1450} value={0}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Solo</Text>
                        </Surface>
                      </View>
                    </FadeOutView>
                    <FadeOutView duration={1850} value={0}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Duo</Text>
                        </Surface>
                      </View>
                    </FadeOutView>
                    <FadeOutView duration={2250} value={0}>
                      <View>
                        <Surface style={secondScreenStyles.surface}>
                              <Text style={styles.surfaceText}>Squads</Text>
                        </Surface>
                      </View>
                    </FadeOutView>
                  </View>
              </View>
            ) : (
              <this.Stats />
            )
          )
        )
      )
    );
  }
}
