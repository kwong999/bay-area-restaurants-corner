import {
  STATE_UPDATED
} from '../actions/update_actions';

import {
  RECEIVE_RATE,
  DELETE_RATE
} from '../actions/rate_actions'

import {
  RECEIVE_VOTE,
  DELETE_VOTE
} from '../actions/vote_actions';

import {
  RECEIVE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions'

const initialState = {
  updated: true
}

const updateReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RATE:
    case DELETE_RATE:
    case RECEIVE_VOTE:
    case DELETE_VOTE: 
    case RECEIVE_COMMENT:
    case DELETE_COMMENT:
      return { updated: false };
    case STATE_UPDATED:
      return initialState;
    default:
      return state;
  }
}

export default updateReducer;