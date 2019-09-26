import React from 'react';
import { View, Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { loginFacebook, logout, loginStart } from '../actions';
import PrimaryButton from './PrimaryButton';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (error, result) => {
      dispatch(loginStart());
      dispatch(loginFacebook(error, result));
    },
    onLogout: () => dispatch(logout())
  };
};

const FBLoginButton = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <View>
      {
        (isLoggedIn)
          ? (
            <PrimaryButton onPress={
              () => {
                LoginManager.logOut();
                onLogout();
              }
            }>Logout</PrimaryButton>
          )
          : (
            <PrimaryButton onPress={
              () => LoginManager.logInWithPermissions(['email'])
                .then(
                  (result) => onLogin(null, result),
                  (error) => onLogin(error)
                )
            }>Login with Facebook</PrimaryButton>
          )
      }
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton);
