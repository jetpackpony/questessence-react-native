import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Container, Content,
} from 'native-base';

import QuestCard from '../components/QuestCard';

const desc = 'Как всё хорошо и замечательно в этом квесте. У всех безудержное веселье, все добрые и всех любят, в воздухе летают бабочки, вокруг бегают единороги и блюют радугой! Нет больше бедности и болезней, все получили премию. Отменили санкции и вообще теперь счастье всей планете. Всего за 500 рублей';

const imgs = [{
  img: 'https://kudago.com/media/images/news/d3/2e/d32ecc1b3e4aa49f49c5f220a8dc88b8.jpg',
  title: 'Петропавловская Крепость и Окрестности',
  desc,
  questions: [{
    id: 0,
    media: {
      type: 'image',
      uri: 'https://kudago.com/media/images/news/d3/2e/d32ecc1b3e4aa49f49c5f220a8dc88b8.jpg'
    },
    desc: 'На этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачемНа этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачем',
    questionText: 'Сколько планет в солнечной системе?',
    answer: '8',
    answerDesc: 'Потому что Плутон больше не планета'
  }]
}, {
  img: 'https://d3hdm9bjz45yxn.cloudfront.net/userfiles/excursiongalleries/pictureshd/345/4129.jpeg',
  title: 'Русский Музей',
  desc
}, {
  img: 'http://estelhautecouture.ru/assets/i/upload/20150401/dfa173b463af881eade974a743ac8929.jpg',
  title: 'Легенды Петергофа',
  desc
}];

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    const cards = imgs.map((quest, i) => {
      return (
        <QuestCard
          key={i}
          quest={quest}
          onPress={() => navigate('Quest', { quest })}
        />
      );
    });
    return (
      <Container>
        <Content padder>
          {cards}
        </Content>
      </Container>
    );
  }
}
