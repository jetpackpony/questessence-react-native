import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import initStore from './initStore';
import { name as appName } from '../app.json';
import { makeNavigationAppContainer } from './navigation';
import useDrawer from './useDrawer';
import DrawerContent from './components/DrawerContent';

const QuestEssence = () => {
  const { Drawer, openDrawer } = useDrawer(<DrawerContent />);
  const AppContainer = makeNavigationAppContainer({ openDrawer });

  return (
    <Provider store={initStore()}>
      <Drawer>
        <AppContainer />
      </Drawer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => QuestEssence);
