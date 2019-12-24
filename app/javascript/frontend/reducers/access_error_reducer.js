import { USER_ACCESS_DENIED, USER_ACCESS_DENIED_REDIRECTED } from '../actions/user_actions';

const accessErrorReducer = (state = "", action) => {
  Object.freeze(state);
  switch (action.type) {
    case USER_ACCESS_DENIED:
      return action.errors;
    case USER_ACCESS_DENIED_REDIRECTED:
      return "";
    default:
      return state;
  };
};

export default accessErrorReducer;