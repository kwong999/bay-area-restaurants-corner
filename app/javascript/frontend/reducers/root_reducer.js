import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorReducer from './error_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorReducer,
  ui: uiReducer
});

export default rootReducer;