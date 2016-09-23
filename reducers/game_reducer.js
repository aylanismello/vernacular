import { GameConstants } from '../actions/game_actions';
import * as _ from 'lodash';

const defaultGame = Object.freeze({
  deck: [],
  word: "",
  correctCount: 0
});

const GameReducer = (state=defaultGame, action) => {
  let newState;
  // debugger;
  switch (action.type) {
    case GameConstants.ADD_CORRECT:
      newState = _.merge({}, state, {correctCount: state.correctCount + 1});
      return newState;
    case GameConstants.INIT_GAME_DECK:
      newState = _.merge({}, state, {deck: action.deck, correctCount: 0});
      // reset correctCount
      return newState;
		case GameConstants.REMOVE_WORD:
			newState = _.merge({}, state);
			_.remove(newState.deck, {
		    dest: action.word
			});
			return newState;
    case GameConstants.SET_WORD:
      newState = _.merge({}, state, {word: action.word});
      return newState;
    default:
      return state;
  }
};

export default GameReducer;
