import React from 'react';
import { View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import I18n from '../locales/i18n';
import withLogin from '../withLogin';

export const FBLoginButton = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <View>
      {
        (isLoggedIn)
          ? (
            <PrimaryButton onPress={onLogout}>
              {I18n.t("logout")}
            </PrimaryButton>
          )
          : (
            <PrimaryButton onPress={onLogin}>
              {I18n.t("loginWithFacebook")}
            </PrimaryButton>
          )
      }
    </View>
  );
};

export default withLogin(FBLoginButton);
