export const GameConstants = {
	INIT_GAME_DECK: 'INIT_GAME_DECK',
	REMOVE_WORD: 'REMOVE_WORD',
	SET_WORD: 'SET_WORD'
};

export const initGameDeck = deck => ({
	type: GameConstants.INIT_GAME_DECK,
	deck
});

export const removeWord = word => ({
	type: GameConstants.REMOVE_WORD,
	word
});

export const setWord = word => ({
	type: GameConstants.SET_WORD,
	word
});
