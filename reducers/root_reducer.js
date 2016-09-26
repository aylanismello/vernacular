import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';
import NavReducer from './nav_reducer';
import GameReducer from './game_reducer';

const RootReducer = combineReducers({
	deck: DeckReducer,
	nav: NavReducer,
	game: GameReducer
});

export default RootReducer;
