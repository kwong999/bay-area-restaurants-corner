import * as APIUtil from '../util/rate_api_util'

export const RECEIVE_RATE = 'RECEIVE_RATE';
export const RECEIVE_RATE_ERROR = 'RECEIVE_RATE_ERROR';
export const DELETE_RATE = 'DELETE_RATE';

export const receiveRate = rate => ({
  type: RECEIVE_RATE,
  rate
})

export const deleteRate = () => ({
  type: DELETE_RATE
})

export const receiveRateErrors = errors => ({
  type: RECEIVE_RATE_ERROR,
  errors
})

export const createRate = rate => dispatch => (
  APIUtil.createRate(rate)
    .then(
      rate => dispatch(receiveRate(rate)),
      error => dispatch(receiveRateErrors(error.responseJSON))
    )
)

export const updateRate = (rate, id) => dispatch => (
  APIUtil.updateRate(rate, id)
    .then(
      rate => dispatch(receiveRate(rate)),
      error => dispatch(receiveRateErrors(error.responseJSON))
    )
)

export const destroyRate = id => dispatch => (
  APIUtil.destroyRate(id)
    .then(
      () => dispatch(deleteRate())
    )
)