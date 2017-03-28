import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';

import QuestImageWithTitle from '../components/QuestImageWithTitle';
import QuestButtonBlock from '../components/QuestButtonBlock';
import {
  QuestStates, startQuest,
  purchaseQuest, downloadQuest, deleteQuest
} from '../actions/Actions';

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const progress = state.progress[questId];
  return {
    quest: state.entities.quests.byId[questId],
    progress,
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
    onContinueClick: nav,
    onPurchaseClick: () => {
      dispatch(purchaseQuest(questId));
    },
    onDownloadClick: () => {
      dispatch(downloadQuest(questId));
    },
    onDelete: () => {
      dispatch(deleteQuest(questId));
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
            <QuestButtonBlock
              progress={this.props.progress}
              onStart={this.props.onStartClick}
              onContinue={this.props.onContinueClick}
              onPurchase={this.props.onPurchaseClick}
              onDownload={this.props.onDownloadClick}
            />
            {(this.props.progress)
                ? (
                  <Button block danger style={{ margin: 10 }} onPress={this.props.onDelete}>
                    <Text>Удалить</Text>
                  </Button>
                )
                : null}
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
