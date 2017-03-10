import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from '../components/QuestionMedia';

export default class Question extends Component {
  render() {
    return (
      <View>
        <View style={styles.mediaContainer}>
          <QuestionMedia
            media={this.props.question.media}
          />
        </View>
        <View style={styles.questionContainer}>
          <Text>
            {this.props.question.desc}
          </Text>
          <Text style={styles.questionText}>
            {this.props.question.questionText}
          </Text>
          <Form>
            <Item floatingLabel >
              <Label>Ответ:</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={{ margin: 10 }}>
            <Text>Готово</Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    height: 150
  },
  questionContainer: {
    padding: 10
  },
  questionText: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});