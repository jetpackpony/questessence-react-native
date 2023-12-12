import { StyleSheet, View, TouchableNativeFeedback } from "react-native";
import { Card, CardItem } from "native-base";

import QuestImageWithTitle from "./QuestImageWithTitle";

const QuestCard = ({ quest, onPress }) => (
  <Card>
    <CardItem cardBody>
      <TouchableNativeFeedback onPress={onPress} useForeground={true}>
        <View style={styles.cardImageContainer}>
          <QuestImageWithTitle img={quest.cover} title={quest.localizedTitle} />
        </View>
      </TouchableNativeFeedback>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  cardImageContainer: {
    flex: 1,
    height: 300,
  },
});

export default QuestCard;
