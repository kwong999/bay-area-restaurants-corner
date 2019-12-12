import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS
} from '../actions/business_actions'
import {
  RECEIVE_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return Object.assign({}, action.payload.comments)
    case RECEIVE_BUSINESS:
      return Object.assign({}, action.payload.comments)
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id] : action.comment })
    default:
      return state;
  }
};

export default commentsReducer;