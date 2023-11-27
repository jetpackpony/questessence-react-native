import { connect } from 'react-redux';
import { hideLoginModal } from '../actions';
import LoginModal from './LoginModal';
import I18n from '../locales/i18n';

const mapStateToProps = (state) => ({
  isLoginModalShown: state.UIState.isLoginModalShown,
  isLoggingInSpinnerShown: state.UIState.isLoggingInSpinnerShown,
  registerText: I18n.t('loginModalRegisterText'),
  holdOnButtonText: I18n.t('loginModalHoldOnButton'),
  notNowButtonText: I18n.t('loginModalNotNowButton')
});

export default connect(mapStateToProps, { hideLoginModal })(LoginModal);

