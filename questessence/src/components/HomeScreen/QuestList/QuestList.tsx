import { Container, Content } from "native-base";
import QuestCard from "./QuestCard";

export default function QuestList({ quests, getOnQuestPress }) {
  return (
    <Container>
      <Content padder>
        {quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
            onPress={getOnQuestPress(quest)}
          />
        ))}
      </Content>
    </Container>
  );
}
