import React from 'react';
import { Content } from 'native-base';
import Question from './Question';
import QuestComplete from './QuestComplete';

export default ({
  currentQuestion, completed
}) => ((completed)
  ? (
    <QuestComplete />
  )
  : (
    <Content keyboardShouldPersistTaps={'always'}>
      <Question question={currentQuestion} />
    </Content>
  )
);

