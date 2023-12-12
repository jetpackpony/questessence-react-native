import { chooseTranslation, translate } from "../../i18n";
import QuestListContainer from "../QuestList";

export default function HomeScreen({ navigate }) {
  return <QuestListContainer navigate={navigate} />;
}
