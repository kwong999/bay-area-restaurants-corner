import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  //TEST START
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //TEST END
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});