import { WordConstants } from '../actions/word_actions';
import * as _ from 'lodash';

const defaultWord = Object.freeze({
	decks: [],
	deckIdx: 0,
	cardIdx: 0
});

const WordReducer = (state=defaultWord, action) => {
	let newState;
	// debugger;
	switch (action.type) {
		case WordConstants.SUBMIT_WORDS:
			// debugger;
			newState = _.merge({}, state, {words: action.words});
			return newState;
		default:
			return state;
	}
};

export default WordReducer;
