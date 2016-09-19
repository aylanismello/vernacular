import { combineReducers } from 'redux';
import WordReducer from './word_reducer';

const RootReducer = combineReducers({
	word: WordReducer
});

export default RootReducer;
