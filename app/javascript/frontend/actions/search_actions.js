import * as APIUtil from '../util/business_api_util'
import { receiveBusinesses } from './business_actions';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = search => ({
  type: RECEIVE_SEARCH,
  search: search || ''
});

export const fetchSearchResult = search => dispatch => {
  dispatch(receiveSearch(search));
  return APIUtil.fetchBusinesses({ search: search , limit: 3, page: 1})
    .then(businesses => dispatch(receiveBusinesses(businesses)))
};