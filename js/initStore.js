import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import addTimeStamp from './middleware/AddTimeStamp';
import QuestessenceReducer from './reducers/QuestessenceReducer.js';
import { updateQuestList, syncProgress } from './actions';
import { listenToQuests } from './database';
import syncStorageWithFirebase from './middleware/SyncStorageWithFirebase';
import { dontHydrateKeys } from './reducers/QuestessenceReducer';

export default () => {
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

  // Setup rehydration
  persistStore(store, {
    storage: AsyncStorage,
    blacklist: dontHydrateKeys
  }, () => {
    // On rehydration complete
    listenToQuests((quests) => {
      store.dispatch(updateQuestList(quests))
    });
    store.dispatch(syncProgress());
  });

  return store;
};
