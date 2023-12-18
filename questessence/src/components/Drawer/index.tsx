import { useRef } from "react";
import { DrawerLayoutAndroid, Text } from "react-native";
import DrawerContent from "./DrawerContent";

export default function LeftDrawer({ children }) {
  const drawer = useRef(null);
  const openDrawer = () => drawer.current.openDrawer();
  const closeDrawer = () => drawer.current.closeDrawer();

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <DrawerContent />}
    >
      {children}
    </DrawerLayoutAndroid>
  );
}
