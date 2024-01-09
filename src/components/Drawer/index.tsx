import { createContext, useCallback, useRef } from "react";
import { DrawerLayoutAndroid, Text } from "react-native";
import DrawerContent from "./DrawerContent";

export const DrawerContext = createContext({ openDrawer: () => {} });

export default function LeftDrawer({ children }) {
  const drawer = useRef(null);
  const openDrawer = useCallback(() => drawer.current.openDrawer(), [drawer]);

  return (
    <DrawerContext.Provider value={{ openDrawer }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <DrawerContent />}
      >
        {children}
      </DrawerLayoutAndroid>
    </DrawerContext.Provider>
  );
}
