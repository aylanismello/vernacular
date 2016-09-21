import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';
import NavReducer from './nav_reducer';

const RootReducer = combineReducers({
	deck: DeckReducer,
	nav: NavReducer
});

export default RootReducer;
