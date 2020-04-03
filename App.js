import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen/HomeScreen';
import GameID from './components/GameID/GameID';
import LifetimeStats from './components/LifetimeStats/LifetimeStats';

const Stack = createStackNavigator();

const removeHeader = () => ({
  headerShown: false
})

const placeholder = () => {
  return (
    <View>
      <Text>placeholder</Text>
    </View>
  );
};

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={removeHeader}
        />
        <Stack.Screen
          name="placeholder"
          component={placeholder}
          options={removeHeader}
        />
        <Stack.Screen
          name="Game ID"
          component={GameID}
          options={removeHeader}
        />
        <Stack.Screen
          name="LifetimeStats"
          component={LifetimeStats}
          options={removeHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
