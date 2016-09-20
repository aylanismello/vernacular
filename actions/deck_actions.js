export const DeckConstants = {
	SUBMIT_DECK: 'SUBMIT_DECK',
	GET_DECKS: 'GET_DECKS',
	RECEIVE_DECKS: 'RECEIVE_DECKS'
};


const fakeDecks = [
	{title: "french",
		deck: [{"source": "hello", "dest": "salut"},
		{"source": "bye", "dest": "adieu"},
		{"source": "no worries", "dest": "pas de stress"},
		{"source": "bread", "dest": "pain"},
		{"source": "friend", "dest": "ami"} ] },

	{title: "korean",
		deck: [{"source": "hello", "dest": "안녕"},
		{"source": "bye", "dest": "안녕"},
		{"source": "soju", "dest": "소주"},
		{"source": "beer", "dest": "멕주"},
		{"source": "friend", "dest": "친구"} ] }

];

export const submitDeck = (deck) => ({
	type: DeckConstants.SUBMIT_DECK,
	deck
});

export const getDecks = decks => ({
	type: DeckConstants.GET_DECKS,
	decks
});

export const receiveDecks = (decks=fakeDecks) => ({
	type: DeckConstants.RECEIVE_DECKS,
	decks
});
