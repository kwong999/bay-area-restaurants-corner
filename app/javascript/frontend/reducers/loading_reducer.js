import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESS_ERROR,
  START_LOADING_BUSINESS
} from '../actions/business_actions';
import { 
  START_LOADING_USER,
  RECEIVE_USER 
} from '../actions/user_actions';

const initialState = {
  loadingBusiness: false,
  loadingUser: false
}

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
    case RECEIVE_BUSINESS_ERROR:
      return Object.assign({}, state, { loadingBusiness: false });
    case START_LOADING_BUSINESS:
      return Object.assign({}, state, { loadingBusiness: true });
    case RECEIVE_USER:
      return Object.assign({}, state, { loadingUser: false });
    case START_LOADING_USER:
      return Object.assign({}, state, { loadingUser: true });
    default:
      return state;
  }
};

export default loadingReducer;