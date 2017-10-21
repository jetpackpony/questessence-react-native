import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import BodyText from '../components/BodyText';
import ButtonText from '../components/ButtonText';
import PrimaryButton from '../components/PrimaryButton';

import QuestImageWithTitle from '../components/QuestImageWithTitle';
import QuestButtonBlock from '../components/QuestButtonBlock';
import {
  QuestStates, startQuest, DownloadStates,
  downloadQuest, deleteQuest,
  hideLoginModal
} from '../actions/Actions';
import LoginModal from '../components/LoginModal';

import I18n from '../locales/i18n';

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const progress = state.progress[questId];
  let downloaded = state.downloadedQuests[questId];
  if (!downloaded) {
    downloaded = DownloadStates.NOT_DOWNLOADED;
  }

  return {
    quest: state.entities.quests.byId[questId],
    progress,
    downloaded,
    isLoginModalShown: state.isLoginModalShown,
    isLoggingInSpinnerShown: state.isLoggingInSpinnerShown
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
    onDownloadClick: () => {
      dispatch(downloadQuest(questId));
    },
    onDelete: () => {
      dispatch(deleteQuest(questId));
    },
    hideLoginModal: () => {
      dispatch(hideLoginModal());
    }
  };
};

class QuestScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  render() {
    return (
      <Container>
        <Content>
          <LoginModal
            isLoggingInSpinnerShown={this.props.isLoggingInSpinnerShown}
            isLoginModalShown={this.props.isLoginModalShown}
            hideLoginModal={this.props.hideLoginModal}
          />
          <View style={styles.coverContainer}>
            <QuestImageWithTitle
              img={this.props.quest.cover}
              title={this.props.quest.title}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <View style={{ padding: 10 }}>
            <BodyText>{this.props.quest.desc}</BodyText>
          </View>
            <QuestButtonBlock
              progress={this.props.progress}
              downloaded={this.props.downloaded}
              onStart={this.props.onStartClick}
              onContinue={this.props.onContinueClick}
              onDownload={this.props.onDownloadClick}
            />
            {(this.props.progress)
                ? (
                  <PrimaryButton onPress={this.props.onDelete}>
                    {I18n.t('deleteQuest')}
                  </PrimaryButton>
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
