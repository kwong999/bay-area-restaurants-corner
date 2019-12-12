import * as APIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERROR = 'RECEIVE_COMMENT_ERROR';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const deleteComment = () => ({
  type: DELETE_COMMENT
})

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERROR,
  errors
})

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(
      comment => dispatch(receiveComment(comment)),
      error => dispatch(receiveCommentErrors(error.responseJSON))
    )
)

export const updateComment = (comment, id) => dispatch => (
  APIUtil.updateComment(comment, id)
    .then(
      comment => dispatch(receiveComment(comment)),
      error => dispatch(receiveCommentErrors(error.responseJSON))
    )
)

export const destroyComment = id => dispatch => (
  APIUtil.destroyComment(id)
    .then(
      comment => dispatch(deleteComment(comment))
    )
)