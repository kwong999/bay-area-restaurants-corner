import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';

import { fetchBusinesses } from '../frontend/actions/business_actions'
import { fetchUser } from '../frontend/actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { currentUserId: id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TEST START
  if (process.env.NODE_ENV === `development`) {
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchBusinesses = fetchBusinesses;
    window.fetchUser = fetchUser;
  }
  //TEST END
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});