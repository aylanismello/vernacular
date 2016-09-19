import {WordConstants, submitWords} from '../actions/word_actions';

import * as API from '../util/translate_api';



 const WordMiddleware = ({getState, dispatch}) => next => action => {
	 switch (action.type) {
		 	case WordConstants.SUBMIT_WORDS:
				API.submitWords(action.words);
				return next(action);
		 	default:
				return next(action);
	 }
 };

 export default WordMiddleware;
