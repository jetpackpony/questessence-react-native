import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import initStore from './initStore';
import AppNavigator from './AppNavigator';
import { name as appName } from '../app.json';

const QuestEssence = () => (
  <Provider store={initStore()}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => QuestEssence);
