export const WordConstants = {
	SUBMIT_WORDS: 'SUBMIT_WORDS'
};

export const submitWords = (words) => ({
	type: WordConstants.SUBMIT_WORDS,
	words
});
