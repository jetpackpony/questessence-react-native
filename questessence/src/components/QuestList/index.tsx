import QuestList from "./QuestList";

export default function QuestListContainer({ navigate }) {
  const getOnQuestPress = (quest) => () =>
    navigate("Quest", {
      questId: quest.id,
      title: quest.title,
    });
  const quests = [
    {
      cover: "https://i.imgur.com/8XMNnFU.jpg",
      desc: {
        en: "The Louvre is the world's largest art museum and a historic monument in Paris, France. This quest offers a fun and engaging way to explore the museum’s most famous exhibits.",
        ru: "Музей Лувра - один из крупнейших и самый популярный художественный музей мира. Этот квест - увлекательный способ познакомиться с самыми известными экспонатами музея.",
      },
      id: "quest0",
      questionsInOrder: [
        "question0",
        "question1",
        "question2",
        "question3",
        "question4",
      ],
      title: {
        en: "The Louvre: Most Famous Exhibits",
        ru: "Лувр: Самые Известные Экспонаты",
      },
      localizedTitle: "The Louvre: Most Famous Exhibits",
    },
  ];

  return <QuestList quests={quests} getOnQuestPress={getOnQuestPress} />;
}
