import { QuestStates, QuestionStates } from '../../actions/Actions';

const DummyData = () => {
  return {
    entities: {
      quests: {
        byId: {
          quest0: {
            id: "quest0",
            title: 'Test',
            cover: 'http://...',
            desc: 'Description',
            questionsInOrder: ["question0", "question1"]
          }
        },
        allIds: ["quest0"]
      },
      questions: {
        byId: {
          question0: {
            id: "question0",
            quest: "quest0",
            media: {
              type: 'image',
              uri: 'https://'
            },
            desc: 'На этом месте будет описание ',
            questionText: 'Сколько планет в солнечной системе?',
            answer: '8',
            answerDesc: 'Потому что Плутон больше не планета'
          },
          question1: {
            id: "question1",
            quest: "quest0",
            media: {
              type: 'image',
              uri: 'https://'
            },
            desc: 'На этом месте будет описание вопроса',
            questionText: 'Сколько часов в сутках?',
            answer: '24',
            answerDesc: 'Хотелось бы больше, конечно'
          }
        },
        allIds: ["question0", "question1"]
      }
    },
    progress: {}
  };
};

export default DummyData;
