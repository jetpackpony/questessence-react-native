import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

import PrimaryButton from './PrimaryButton';
import FBLoginButton from './FBLoginButton';
import BoldBodyText from './BoldBodyText';

export default ({
  hideLoginModal,
  isLoginModalShown,
  isLoggingInSpinnerShown,
}) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={isLoginModalShown}
      onRequestClose={hideLoginModal}
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={{ textAlign: 'center' }}>
            <BoldBodyText>
              Зарегистрируйтесь, чтобы сохранять купленные
              квесты и прогресс в ваших квестах.
            </BoldBodyText>
          </Text>
        </View>
        <View>
          {(isLoggingInSpinnerShown)
              ? (
                <PrimaryButton disabled >
                  Подождите...
                </PrimaryButton>
              )
              : (
                <View>
                  <FBLoginButton />
                  <PrimaryButton onPress={hideLoginModal}>
                    Не сейчас
                  </PrimaryButton>
                </View>
              )
          }
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40
  }
});
