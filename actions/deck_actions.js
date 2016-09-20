export const DeckConstants = {
	SUBMIT_DECK: 'SUBMIT_DECK'
};

export const submitDeck = (deck) => ({
	type: DeckConstants.SUBMIT_DECK,
	deck
});
