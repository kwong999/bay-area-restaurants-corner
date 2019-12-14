import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';

import { fetchBusinesses } from '../frontend/actions/business_actions'
import { fetchSearchResult } from '../frontend/actions/search_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  //TEST START
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchBusinesses = fetchBusinesses;
  window.fetchSearchResult = fetchSearchResult;
  //TEST END
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});