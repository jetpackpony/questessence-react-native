import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import QuestScreen from './QuestScreen';
import QuestProgressScreen from './QuestProgressScreen';

const QuestEssence = StackNavigator({
  Home: { screen: HomeScreen },
  Quest: { screen: QuestScreen },
  QuestProgress: { screen: QuestProgressScreen },
});

AppRegistry.registerComponent('QuestEssence', () => QuestEssence);
