import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';

import QuestImageWithTitle from '../components/QuestImageWithTitle';
import { startQuest } from '../actions/Actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  return {
    quest: state.entities.quests.byId[id],
    progress: state.progress[id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  return {
    onStartClick: () => {
      dispatch(startQuest(questId));
      ownProps.navigation.navigate('QuestProgress', {
        questId,
        title: ownProps.navigation.state.params.title
      });
    }
  };
};

class QuestScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.title
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.coverContainer}>
            <QuestImageWithTitle
              img={this.props.quest.cover}
              title={this.props.quest.title}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text>{this.props.quest.desc}</Text>
            <Button
              block
              success
              style={{ margin: 10 }}
              onPress={this.props.onStartClick}
            >
              <Text>Начать</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    height: 250
  },
  descriptionContainer: {
    padding: 10
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestScreen);
