import { Container } from "native-base";
import QuestQuestionsContainer from "./QuestQuestion";
import ProgressBarContainer from "./ProgressBar";

export default function QuestQuestionsScreen({ navigation, route }) {
  const questId = route.params.questId;
  return (
    <Container>
      <QuestQuestionsContainer navigation={navigation} questId={questId} />
      <ProgressBarContainer navigation={navigation} questId={questId} />
    </Container>
  );
}
