import { combineReducers } from 'redux';
import loginErrorReducer from './login_error_reducer';

const errorReducer = combineReducers({
  login: loginErrorReducer
});

export default errorReducer;
