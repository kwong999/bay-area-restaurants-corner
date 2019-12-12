import * as APIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESS_ERROR = 'RECEIVE_BUSINESS_ERROR';
export const START_LOADING_BUSINESS = 'START_LOADING_BUSINESS';

export const receiveBusinesses = payload => ({
  type: RECEIVE_BUSINESSES,
  payload
});

export const receiveBusiness = payload => ({
  type: RECEIVE_BUSINESS,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_BUSINESS_ERROR,
  errors
});

export const startLoadingBusiness = () => ({
  type: START_LOADING_BUSINESS
});

export const fetchBusinesses = () => dispatch => {
  dispatch(startLoadingBusiness());
  return APIUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
};

export const fetchBusiness = id => dispatch => {
  dispatch(startLoadingBusiness());
  return APIUtil.fetchBusiness(id)
    .then(
      businesses => dispatch(receiveBusiness(businesses)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
};

export const createBusiness = business => dispatch => {
  dispatch(startLoadingBusiness());
  return APIUtil.createBusiness(business)
    .then(
      businesses => dispatch(receiveBusiness(businesses)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
};