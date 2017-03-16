let storeStructure = {
  questData: {
    quests: [{
      id: 0,
      title: 'Test',
      cover: 'http://...',
      desc: 'Description'
    }],
    questions: {
      quest0: [{
        media: {
          type: 'image',
          uri: 'https://'
        },
        desc: 'На этом месте будет описание ',
        questionText: 'Сколько планет в солнечной системе?',
        answer: '8',
        answerDesc: 'Потому что Плутон больше не планета'
      },{
        media: {
          type: 'image',
          uri: 'https://'
        },
        desc: 'На этом месте будет описание вопроса',
        questionText: 'Сколько часов в сутках?',
        answer: '24',
        answerDesc: 'Хотелось бы больше, конечно'
      }],
      quest1: [],
      quest2: [],
    }
  },
  questProgress: {
    quest0: {
      questState: ('notStarted', 'started', 'completed'),
      currentQuestion: 3,
      currentAnswer: '',
      currentQuestionState: ('unanswered'|'correct'|'incorrect'|'showAnswer')
    },
    quest1: {}
  }
}
