import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { authStateReducer } from 'redux-oauth';
import timeReducer from './timeReducer';

export default combineReducers({
	auth: authStateReducer,
	time: timeReducer,
	counter: counterReducer
});