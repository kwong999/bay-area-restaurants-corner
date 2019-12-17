import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const START_LOADING_USER = 'START_LOADING_USER'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const startLoadingUser = () => ({
  type: START_LOADING_USER,
})

export const fetchUser = (id, args) => dispatch => {
  dispatch(startLoadingUser());
  return APIUtil.fetchUser(id, args)
    .then(user => dispatch(receiveUser(user)))
};