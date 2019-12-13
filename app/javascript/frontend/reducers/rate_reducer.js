import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'
import { 
  RECEIVE_RATE 
} from '../actions/rate_actions';

const ratesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.payload.rates)
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.payload.rates)
    case RECEIVE_RATE:
      return Object.assign({}, { [action.rate.user_id]: action.rate })
    default:
      return state;
  }
};

export default ratesReducer;