import { View } from "react-native";
import AnswerFormInputContainer from "./AnswerFormInput";
import { translate } from "../../../../i18n";
import SecondaryButton from "../../../SecondaryButton";
import PrimaryButton from "../../../PrimaryButton";

export default ({
  questionId,
  questId,
  onActionShowAnswer,
  onNextQuestion,
  unanswered,
  correct,
  incorrect,
  showAnswer,
}) => (
  <View>
    {unanswered || incorrect ? (
      <AnswerFormInputContainer questId={questId} questionId={questionId} />
    ) : null}
    {correct || showAnswer ? (
      <SecondaryButton onPress={() => onNextQuestion()}>
        {translate("answerNextQuestion")}
      </SecondaryButton>
    ) : null}
    {incorrect && !showAnswer ? (
      <PrimaryButton onPress={onActionShowAnswer}>
        {translate("answerRevealAnswer")}
      </PrimaryButton>
    ) : null}
  </View>
);
