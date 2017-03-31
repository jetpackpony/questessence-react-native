import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import QuestProgressScreen from './screens/QuestProgressScreen';
import { QuestessenceReducer } from './reducers/QuestessenceReducer.js';
import { updateQuestList, restoreLogin } from './actions/Actions';
import Database from './database/Database';
import addTimeStamp from './middleware/AddTimeStamp';

const QuestEssenceNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Quest: { screen: QuestScreen },
  QuestProgress: { screen: QuestProgressScreen },
});

const store = createStore(
  QuestessenceReducer,
  compose(
    autoRehydrate(),
    applyMiddleware(thunk, addTimeStamp, logger)
  )
);
Database.listenToQuests((quests) => {
  store.dispatch(updateQuestList(quests))
});
store.dispatch(restoreLogin());
persistStore(store, {storage: AsyncStorage});

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
