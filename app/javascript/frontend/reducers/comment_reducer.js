import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.payload.comments)
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.payload.comments)
    default:
      return state;
  }
};

export default commentsReducer;