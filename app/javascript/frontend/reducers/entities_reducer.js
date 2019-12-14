import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessReducer from './business_reducer';
import commentsReducer from './comment_reducer';
import ratesReducer from './rate_reducer';
import votesReducer from './vote_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  comments: commentsReducer,
  rates: ratesReducer,
  votes: votesReducer,
  search: searchReducer
});

export default entitiesReducer;