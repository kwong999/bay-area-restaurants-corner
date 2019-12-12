import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessReducer from './business_reducer';
import commentsReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  comments: commentsReducer
});

export default entitiesReducer;