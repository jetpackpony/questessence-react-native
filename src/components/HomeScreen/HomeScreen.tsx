import { useContext, useEffect } from "react";
import QuestListContainer from "./QuestList";
import { View } from "react-native";
import { Icon } from "native-base";
import { DrawerContext } from "../Drawer";

export default function HomeScreen({ navigation }) {
  const { openDrawer } = useContext(DrawerContext);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ paddingRight: 16 }}>
          <Icon
            name="md-menu"
            onPress={openDrawer}
            style={{ color: "white" }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return <QuestListContainer navigate={navigation.navigate} />;
}
