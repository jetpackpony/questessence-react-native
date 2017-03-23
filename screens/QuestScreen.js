import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';

import QuestImageWithTitle from '../components/QuestImageWithTitle';
import StartButton from '../components/StartButton';
import ContinueButton from '../components/ContinueButton';
import { startQuest } from '../actions/Actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  return {
    quest: state.entities.quests.byId[id],
    started: state.progress[id] !== undefined
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const nav = () => {
    ownProps.navigation.navigate('QuestProgress', {
      questId,
      title: ownProps.navigation.state.params.title
    });
  };
  return {
    onStartClick: () => {
      dispatch(startQuest(questId));
      nav();
    },
    onContinueClick: nav
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
            {(this.props.started)
                ? <ContinueButton onPress={this.props.onContinueClick} />
                : <StartButton onPress={this.props.onStartClick} />
            }
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
