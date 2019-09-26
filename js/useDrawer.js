import React, { useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

export default (content) => {
  const drawer = useRef(null);
  const openDrawer = () => drawer.current.openDrawer();
  const closeDrawer = () => drawer.current.closeDrawer();

  return {
    Drawer: ({ children }) => (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => content}
      >
        {children}
      </DrawerLayoutAndroid>
    ),
    openDrawer,
    closeDrawer
  };
};
