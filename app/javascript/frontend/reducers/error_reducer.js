import { combineReducers } from 'redux';
import loginErrorReducer from './login_error_reducer';
import accessErrorReducer from './access_error_reducer';

const errorReducer = combineReducers({
  login: loginErrorReducer,
  access: accessErrorReducer
});

export default errorReducer;
