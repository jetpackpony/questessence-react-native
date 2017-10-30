import React, { Component } from 'react';
import QuestListContainer from '../components/QuestListContainer';
import I18n from '../locales/i18n';

class HomeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('homeTitle')
  };
  render() {
    return (
      <QuestListContainer navigation={this.props.navigation} />
    );
  }
}

export default HomeScreen;
