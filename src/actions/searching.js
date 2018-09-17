import {
  // KEYWORD_SEARCHING,
  KEYWORD_SEARCHING_ERROR,
  KEYWORD_SEARCHING_SUCCESS
} from '../constans/searching';

import baseService from 'Services/BaseService';

export const searchKeywordsSuccess = (payload) => ({
  type: KEYWORD_SEARCHING_SUCCESS,
  payload
});

export const searchKeywordsError = () => ({
  type: KEYWORD_SEARCHING_ERROR
});

export const searchKeywords = (data) => dispatch => {
  baseService.get('search', data)
    .then(response => {
      console.log(response);
      dispatch(searchKeywordsSuccess(response));
    })
    .catch(error => {
      dispatch(searchKeywordsError(error));
      console.log(error);
    });
};
