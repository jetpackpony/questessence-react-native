import React from "react";
import { View } from "react-native";
import AnswerTextLabel from "./AnswerTextLabel";
import { chooseTranslation, translate } from "../../../../i18n";

export default ({ question, correct, incorrect, showAnswer }) => {
  if (incorrect) {
    return (
      <AnswerTextLabel
        isCorrect={false}
        styledText={translate("answerIncorrect")}
        plainText={translate("answerTryAgain")}
      />
    );
  }

  if (correct) {
    return (
      <AnswerTextLabel
        isCorrect={true}
        styledText={translate("answerCorrect")}
        plainText={chooseTranslation(question.answerDesc)}
      />
    );
  }

  if (showAnswer) {
    return (
      <AnswerTextLabel
        isCorrect={true}
        styledText={
          translate("answerCorrectAnswer") +
          " " +
          chooseTranslation(question.answer)
        }
        plainText={chooseTranslation(question.answerDesc)}
      />
    );
  }

  return <View></View>;
};
