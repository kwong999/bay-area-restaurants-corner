import * as APIUtil from '../util/vote_api_util'

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const RECEIVE_VOTE_ERROR = 'RECEIVE_VOTE_ERROR';
export const DELETE_VOTE = 'DELETE_VOTE';

export const receiveVote = vote => ({
  type: RECEIVE_VOTE,
  vote
})

export const deleteVote = () => ({
  type: DELETE_VOTE
})

export const receiveVoteErrors = errors => ({
  type: RECEIVE_VOTE_ERROR,
  errors
})

export const createVote = vote => dispatch => (
  APIUtil.createVote(vote)
    .then(
      vote => dispatch(receiveVote(vote)),
      error => dispatch(receiveVoteErrors(error.responseJSON))
    )
)

export const updateVote = (vote, id) => dispatch => (
  APIUtil.updateVote(vote, id)
    .then(
      vote => dispatch(receiveVote(vote)),
      error => dispatch(receiveVoteErrors(error.responseJSON))
    )
)

export const destroyVote = id => dispatch => (
  APIUtil.destroyVote(id)
    .then( () => dispatch(deleteVote()) )
)