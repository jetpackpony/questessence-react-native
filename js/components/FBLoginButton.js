import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { loginFacebook, logout, loginStart } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    loginFacebook: (error, result) => {
      dispatch(loginStart());
      dispatch(loginFacebook(error, result));
    },
    logout: () => dispatch(logout())
  };
};

const FBLoginButton = ({ loginFacebook, logout }) => {
  return (
    <View>
      <LoginButton
        readPermissions={["email"]}
        onLoginFinished={loginFacebook}
        onLogoutFinished={logout}
      />
    </View>
  );
};

export default connect(undefined, mapDispatchToProps)(FBLoginButton);
