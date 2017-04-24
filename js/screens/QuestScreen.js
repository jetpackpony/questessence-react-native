import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';

import BodyText from '../components/BodyText';
import ButtonText from '../components/ButtonText';

import QuestImageWithTitle from '../components/QuestImageWithTitle';
import QuestButtonBlock from '../components/QuestButtonBlock';
import {
  QuestStates, startQuest, DownloadStates,
  purchaseQuest, downloadQuest, deleteQuest,
  hideLoginModal
} from '../actions/Actions';
import FBLoginButton from '../components/FBLoginButton';

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
    isPurchasingSpinnerShown: state.isPurchasingSpinnerShown,
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
    onPurchaseClick: (productId) => {
      dispatch(purchaseQuest(questId, productId));
    },
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
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.isLoginModalShown}
            onRequestClose={this.props.hideLoginModal}>
            <Text>Зарегистрируйтесь, чтобы сохранять купленные квесты и прогресс в ваших квестах.</Text>
            {(this.props.isLoggingInSpinnerShown)
                ? (
                  <Button disabled ><ButtonText>Подождите...</ButtonText></Button>
                )
                : (
                  <View>
                    <FBLoginButton />
                    <Button onPress={this.props.hideLoginModal}>
                      <ButtonText>
                        Не сейчас
                      </ButtonText>
                    </Button>
                  </View>
                )
            }
          </Modal>
          <View style={styles.coverContainer}>
            <QuestImageWithTitle
              img={this.props.quest.cover}
              title={this.props.quest.title}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <BodyText>{this.props.quest.desc}</BodyText>
            <QuestButtonBlock
              progress={this.props.progress}
              downloaded={this.props.downloaded}
              isPurchasingSpinnerShown={this.props.isPurchasingSpinnerShown}
              onStart={this.props.onStartClick}
              onContinue={this.props.onContinueClick}
              onPurchase={() => this.props.onPurchaseClick(this.props.quest.googlePlayProductId)}
              onDownload={this.props.onDownloadClick}
            />
            {(this.props.progress)
                ? (
                  <Button block danger style={{ margin: 10 }} onPress={this.props.onDelete}>
                    <ButtonText>Удалить</ButtonText>
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
