import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import QuestCard from '../components/QuestCard';

import I18n from '../locales/i18n';

const mapStateToProps = (state) => {
  const quests = state.entities.quests;
  return {
    quests: quests.allIds.map((el) => quests.byId[el])
  };
};

class HomeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('homeTitle')
  };
  render() {
    const { navigate } = this.props.navigation;
    const cards = this.props.quests.map(quest => {
      return (
        <QuestCard
          key={quest.id}
          quest={quest}
          onPress={() => navigate('Quest', {
            questId: quest.id,
            title: quest.title
          })}
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

export default connect(mapStateToProps)(HomeScreen);
