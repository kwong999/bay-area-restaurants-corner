import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'
import {
  RECEIVE_VOTE
} from '../actions/vote_actions';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.payload.votes)
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.payload.votes)
    case RECEIVE_VOTE:
      return Object.assign({}, { [action.vote.user_id]: { [action.vote.comment_id]: action.vote } })
    default:
      return state;
  }
};

export default votesReducer;