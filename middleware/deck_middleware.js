import {
  DeckConstants,
  submitDeck,
  getDecks,
  receiveDecks,
  receiveDeck } from '../actions/deck_actions';

import * as API from '../util/deck_api';


const DeckMiddleware = ({getState, dispatch}) => next => action => {

  const successGetDecks = (decks) => {
    dispatch(receiveDecks(JSON.parse(decks)));
  };

  const successGetDeck = (deck) => {
    dispatch(receiveDeck(JSON.parse(deck)));
  };




   switch (action.type) {
  	 	case DeckConstants.SUBMIT_DECK:

  			API.submitDeck(action.deck, successGetDeck);
  			return next(action);
      case DeckConstants.GET_DECKS:
        API.getDecks(successGetDecks);
        return next(action);
  	 	default:
  			return next(action);
   }
 };

 export default DeckMiddleware;
