import * as APIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESS_ERROR = 'RECEIVE_BUSINESS_ERROR';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveErrors = errors => ({
  type: RECEIVE_BUSINESS_ERROR,
  errors
})

export const fetchBusinesses = () => dispatch => (
  APIUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id)
    .then(
      businesses => dispatch(receiveBusiness(businesses)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
);

export const createBusiness = business => dispatch => (
  APIUtil.createBusiness(business)
    .then(
      businesses => dispatch(receiveBusiness(businesses)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
);