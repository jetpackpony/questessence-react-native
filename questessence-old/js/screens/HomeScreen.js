import React, { Component } from 'react';
import QuestListContainer from '../components/QuestListContainer';
import I18n from '../locales/i18n';
import { Icon } from 'native-base';
import { View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => {
    return {
      title: I18n.t('homeTitle'),
      headerLeft: (
        <View style={{ paddingLeft: 16 }}>
          <Icon
            name="md-menu"
            size={30}
            onPress={navigationOptions.extraProps.openDrawer}
            style={{ color: "white" }}
          />
        </View>
      )
    };
  };
  render() {
    return (
      <QuestListContainer navigation={this.props.navigation} />
    );
  }
}

export default HomeScreen;
