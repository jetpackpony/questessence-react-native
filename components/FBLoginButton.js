import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { loginFacebook, logoutFacebook } from '../actions/Actions';

const mapDispatchToProps = {
  loginFacebook, logoutFacebook
};

const FBLoginButton = ({ loginFacebook, logoutFacebook }) => {
  return (
    <View>
      <LoginButton
        onLoginFinished={loginFacebook}
        onLogoutFinished={logoutFacebook}
      />
    </View>
  );
};

export default connect(undefined, mapDispatchToProps)(FBLoginButton);
