import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import initStore from './initStore';
import { name as appName } from '../app.json';
import { makeNavigationAppContainer } from './navigation';
import useDrawer from './useDrawer';
import DrawerContent from './components/DrawerContent';
import { STATUS_BAR_COLOR } from './Colors';

const QuestEssence = () => {
  const { Drawer, openDrawer } = useDrawer(<DrawerContent />);
  const AppContainer = makeNavigationAppContainer({ openDrawer });

  return (
    <Provider store={initStore()}>
      <Drawer>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="light-content" />
        <AppContainer />
      </Drawer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => QuestEssence);
