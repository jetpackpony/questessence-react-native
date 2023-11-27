import React from 'react';
import { Container, Content } from 'native-base';
import QuestCard from '../components/QuestCard';

export default ({ quests, getOnQuestPress }) => (
  <Container>
    <Content padder>
      {quests.map(quest => (
        <QuestCard
          key={quest.id}
          quest={quest}
          onPress={getOnQuestPress(quest)}
        />
      ))}
    </Content>
  </Container>
);
