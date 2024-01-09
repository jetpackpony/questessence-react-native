import React from "react";
import { View, StyleSheet } from "react-native";
import QuestionMedia from "./QuestionMedia";
import { chooseTranslation } from "../../../i18n";
import BodyText from "../../BodyText";
import BoldBodyText from "../../BoldBodyText";
import AnswerTextLabelsContainer from "./AnswerTextLabel";
import AnswerFormContainer from "./AnswerForm";

const Question = ({ question }) => (
  <View>
    <View style={styles.mediaContainer}>
      <QuestionMedia media={question.media} />
    </View>
    <View style={styles.questionContainer}>
      <View style={styles.descContainer}>
        <BodyText>{chooseTranslation(question.desc)}</BodyText>
      </View>
      <View style={styles.questionTextContainer}>
        <BoldBodyText>{chooseTranslation(question.questionText)}</BoldBodyText>
      </View>
      <AnswerTextLabelsContainer questionId={question.id} />
      <AnswerFormContainer questId={question.quest} questionId={question.id} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    height: 150,
  },
  questionContainer: {
    padding: 10,
  },
  descContainer: {
    padding: 10,
  },
  questionTextContainer: {
    padding: 10,
  },
});

export default Question;
