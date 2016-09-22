export const DeckConstants = {
	SUBMIT_DECK: 'SUBMIT_DECK',
	GET_DECKS: 'GET_DECKS',
	RECEIVE_DECKS: 'RECEIVE_DECKS',
	RECEIVE_DECK: 'RECEIVE_DECK',
	DELETE_DECK: 'DELETE_DECK',
	REMOVE_DECK: 'REMOVE_DECK',
	UPDATE_DECK_IDX: 'UPDATE_DECK_IDX'
};


export const deleteDeck = deckId => ({
	type: DeckConstants.DELETE_DECK,
	deckId
});

export const submitDeck = (deck) => ({
	type: DeckConstants.SUBMIT_DECK,
	deck
});

export const getDecks = () => ({
	type: DeckConstants.GET_DECKS
});

export const receiveDecks = (decks) => ({
	type: DeckConstants.RECEIVE_DECKS,
	decks
});

export const receiveDeck = (deck) => ({
	type: DeckConstants.RECEIVE_DECK,
	deck
});

export const removeDeck = deckId => ({
	type: DeckConstants.REMOVE_DECK,
	deckId
});

export const updateDeckIdx = deckIdx => ({
	type: DeckConstants.UPDATE_DECK_IDX,
	deckIdx
});
