import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';

const RootReducer = combineReducers({
	deck: DeckReducer
});

export default RootReducer;
