import { combineReducers } from 'redux';
import loading from './loadingReducer';
import togglers from './togglersReducer';
import searching from './searchingReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  loading,
  togglers,
  searching,
  form: formReducer
});
