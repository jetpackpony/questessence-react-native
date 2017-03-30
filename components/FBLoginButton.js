import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { loginFacebook, logout } from '../actions/Actions';

const mapDispatchToProps = {
  loginFacebook, logout
};

const FBLoginButton = ({ loginFacebook, logout }) => {
  return (
    <View>
      <LoginButton
        onLoginFinished={loginFacebook}
        onLogoutFinished={logout}
      />
    </View>
  );
};

export default connect(undefined, mapDispatchToProps)(FBLoginButton);
