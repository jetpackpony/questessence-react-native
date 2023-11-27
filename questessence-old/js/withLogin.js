import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { loginFacebook, logout, loginStart } from './actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  const login = (error, result) => {
    dispatch(loginStart());
    dispatch(loginFacebook(error, result));
  };
  return {
    onLogin: () => {
      LoginManager.logInWithPermissions(['email'])
        .then((result) => login(null, result))
        .catch((error) => login(error))
    },
    onLogout: () => {
      LoginManager.logOut();
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
