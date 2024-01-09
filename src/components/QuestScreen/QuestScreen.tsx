import { Container, Content } from "native-base";
import QuestContainer from "./Quest";

export default function QuestScreen({ navigation, route }) {
  return (
    <Container>
      <Content>
        <QuestContainer
          questId={route.params.questId}
          navigation={navigation}
        />
      </Content>
    </Container>
  );
}
