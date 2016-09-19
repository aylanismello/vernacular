export const WordConstants = {
	TICK: 'TICK'
};

export const tick = (quantization) => ({
	type: WordConstants.TICK,
	quantization
});
