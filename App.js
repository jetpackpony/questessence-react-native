import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import QuestProgressScreen from './screens/QuestProgressScreen';

const QuestEssence = StackNavigator({
  Home: { screen: HomeScreen },
  Quest: { screen: QuestScreen },
  QuestProgress: { screen: QuestProgressScreen },
});

AppRegistry.registerComponent('QuestEssence', () => QuestEssence);
