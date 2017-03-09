import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Container, Header, Title,
  Content, Body, Left, Right,
  Card, CardItem,
  H1
} from 'native-base';

const imgs = [{
  img: 'https://kudago.com/media/images/news/d3/2e/d32ecc1b3e4aa49f49c5f220a8dc88b8.jpg',
  title: 'Петропавловская Крепость и Окрестности'
}, {
  img: 'https://d3hdm9bjz45yxn.cloudfront.net/userfiles/excursiongalleries/pictureshd/345/4129.jpeg',
  title: 'Русский Музей'
}, {
  img: 'http://estelhautecouture.ru/assets/i/upload/20150401/dfa173b463af881eade974a743ac8929.jpg',
  title: 'Легенды Петергофа'
}];

export default class QuestEssence extends Component {
  render() {
    const cards = imgs.map((quest, i) => {
      return (
        <Card key={i}>
          <CardItem cardBody onPress={() => console.log(`${quest.title} pressed`)}>
            <View style={styles.cardImageContainer}>
              <Image
                resizeMode='cover'
                style={styles.cardImage}
                source={{ uri: quest.img }}>
                <View style={{ flex: 2 }}></View>
                <View style={{ flex: 1 }}>
                  <View style={styles.textUnderlay}></View>
                  <View style={styles.textContainer}>
                    <Text style={styles.cardHeader}>{quest.title}</Text>
                  </View>
                </View>
              </Image>
            </View>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Header>
          <Body>
            <Title>Санкт-Петербург</Title>
          </Body>
        </Header>
        <Content padder>
          {cards}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardImageContainer: {
    flex: 1,
    height: 300
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  textUnderlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    right: 15
  },
  cardHeader: {
    fontSize: 27,
    color: 'white',
    textAlign: 'right'
  }
});

AppRegistry.registerComponent('QuestEssence', () => QuestEssence);
