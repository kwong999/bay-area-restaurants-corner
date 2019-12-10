import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';
import { login, signup, logout } from '../frontend/actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  //TEST START
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //TEST END
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});