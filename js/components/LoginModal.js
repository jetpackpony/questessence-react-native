import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

import PrimaryButton from './PrimaryButton';
import FBLoginButton from './FBLoginButton';
import BoldBodyText from './BoldBodyText';

import I18n from '../locales/i18n';

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
              {I18n.t('loginModalRegisterText')}
            </BoldBodyText>
          </Text>
        </View>
        <View>
          {(isLoggingInSpinnerShown)
              ? (
                <PrimaryButton disabled >
                  {I18n.t('loginModalHoldOnButton')}
                </PrimaryButton>
              )
              : (
                <View>
                  <FBLoginButton />
                  <PrimaryButton onPress={hideLoginModal}>
                    {I18n.t('loginModalNotNowButton')}
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
