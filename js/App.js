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
import QuestQuestionsScreen from './screens/QuestQuestionsScreen';
import QuestessenceReducer from './reducers/QuestessenceReducer.js';
import { updateQuestList, syncProgress } from './actions/Actions';
import Database from './database/Database';
import addTimeStamp from './middleware/AddTimeStamp';
import syncStorageWithFirebase from './middleware/SyncStorageWithFirebase';

import { dontHydrateKeys } from './reducers/QuestessenceReducer';

import { PRIMARY_COLOR, HEADER_TEXT_COLOR } from './Colors';

const QuestEssenceNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Quest: { screen: QuestScreen },
  QuestQuestions: { screen: QuestQuestionsScreen },
} , {
  navigationOptions: {
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTintColor: HEADER_TEXT_COLOR
  }
});

const store = createStore(
  QuestessenceReducer,
  compose(
    autoRehydrate({ log: true }),
    applyMiddleware(
      thunk, addTimeStamp,
      /* These middleware have to be at the end */
      syncStorageWithFirebase, logger
    )
  )
);
persistStore(store, {
  storage: AsyncStorage,
  blacklist: dontHydrateKeys
}, () => {
  // On rehydration complete
  Database.listenToQuests((quests) => {
    store.dispatch(updateQuestList(quests))
  });
  store.dispatch(syncProgress());
});

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
