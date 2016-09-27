import { DeckConstants } from '../actions/deck_actions';
import * as _ from 'lodash';

const defaultDeck = Object.freeze({
	decks: [],
	deckIdx: 0,
	cardIdx: 0
});

const DeckReducer = (state=defaultDeck, action) => {
	let newState;
	switch (action.type) {
		case DeckConstants.UPDATE_DECK_IDX:
			newState = _.merge({}, state, {deckIdx: action.deckIdx});
			return newState;
		case DeckConstants.RECEIVE_DECK:
			newState = _.merge({}, state, {deckIdx: state.decks.length});
			newState.decks.push(action.deck);
			return newState;
		case DeckConstants.RECEIVE_DECKS:
			newState = _.merge({}, state, {decks: action.decks});
			return newState;
		case DeckConstants.REMOVE_DECK:
			newState = _.merge({}, state);
			debugger;
			let delIdx = state.decks.findIndex(deck => deck._id === action.deckId);
			newState.decks.splice(delIdx, 1);
			debugger;
			return newState;
		default:
			return state;
	}
};

export default DeckReducer;
