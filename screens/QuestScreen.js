import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';

import QuestImageWithTitle from '../components/QuestImageWithTitle';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  return {
    quest: state.entities.quests.byId[id],
    progress: state.progress[id]
  };
};

class QuestScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.title
  };
  render() {
    const { navigate } = this.props.navigation;
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
              onPress={() => navigate('QuestProgress', {
                questId: this.props.questId
              })}
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

export default connect(mapStateToProps)(QuestScreen);
