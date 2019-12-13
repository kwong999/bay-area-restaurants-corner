import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessReducer from './business_reducer';
import commentsReducer from './comment_reducer';
import ratesReducer from './rate_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  comments: commentsReducer,
  rates: ratesReducer
});

export default entitiesReducer;