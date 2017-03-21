import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import QuestProgressScreen from './screens/QuestProgressScreen';
import { QuestessenceReducer } from './reducers/QuestessenceReducer.js';

const QuestEssenceNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Quest: { screen: QuestScreen },
  QuestProgress: { screen: QuestProgressScreen },
});

const store = createStore(QuestessenceReducer);

class QuestEssence extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <QuestEssenceNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('QuestEssence', () => QuestEssence);
