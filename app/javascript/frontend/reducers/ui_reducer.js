import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import updateReducer from './update_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  update: updateReducer
})

export default uiReducer;