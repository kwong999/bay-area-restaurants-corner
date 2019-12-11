import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'

const businessReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, state, action.businesses)
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.business)
    default:
      return state;
  }
};

export default businessReducer;