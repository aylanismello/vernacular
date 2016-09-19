import { WordContants } from '../actions/word_actions';
import * as _ from 'lodash';

const defaultWord = Object.freeze({
	words: new Array(5).fill("")
});

const WordReducer = (state=defaultWord, action) => {
	let newState;
	switch (action.type) {
		default:
			return state;
	}
};

export default WordReducer;
