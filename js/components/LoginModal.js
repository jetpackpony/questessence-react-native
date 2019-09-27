import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';
import FBLoginButton from './FBLoginButton';
import BoldBodyText from './BoldBodyText';

export default ({
  hideLoginModal, isLoginModalShown,
  isLoggingInSpinnerShown, registerText,
  holdOnButtonText, notNowButtonText
}) => (
  <Modal
    animationType={"slide"}
    transparent={false}
    visible={isLoginModalShown}
    onRequestClose={hideLoginModal}
  >
    <View style={styles.container}>
      {(!isLoggingInSpinnerShown)
        ? (
          <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.topText}>
                <BoldBodyText>
                  {registerText}
                </BoldBodyText>
              </Text>
            </View>
            <View>
              <View style={{ width: 250 }}>
                <FBLoginButton />
                <PrimaryButton onPress={hideLoginModal}>
                  {notNowButtonText}
                </PrimaryButton>
              </View>
            </View>
          </View>
        )
        : (
          <View style={styles.top}>
            <Text style={styles.topText}>
              <BoldBodyText>
                {holdOnButtonText}
              </BoldBodyText>
            </Text>
          </View>
        )
      }
    </View>
  </Modal>
);

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
  },
  topText: {
    textAlign: 'center'
  }
});
