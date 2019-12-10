import { combineReducers } from 'redux';
import loginErrorReducer from './login_error_reducer';

const errorReducer = combineReducers({
  errors: loginErrorReducer
});

export default errorReducer;
