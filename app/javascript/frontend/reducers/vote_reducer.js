import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.payload.votes)
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.payload.votes)
    default:
      return state;
  }
};

export default votesReducer;