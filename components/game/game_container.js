import { connect } from 'react-redux';
import Game from './game';
import { initGameDeck,
	removeWord,
 	setWord,
	addCorrect } from '../../actions/game_actions';

const mapStateToProps = (state, ownProps) => {
	let deckIdx = state.deck.deckIdx;
	let deck = state.deck.decks[deckIdx].deck;
	let deckTitle = state.deck.decks[deckIdx].title;

	let gameDeck = state.game.deck;

	let choices = deck.map(card => card.source);
	let words = deck.map(card => card.dest);
	let word = state.game.word;

	return {
		nav: state.nav.nav,
		choices,
		words,
		deck,
		gameDeck,
		word,
		deckTitle
	};
};

const mapDispatchToProps = dispatch => ({
	initGameDeck: deck => dispatch(initGameDeck(deck)),
	removeWord: word => dispatch(removeWord(word)),
	setWord: word => dispatch(setWord(word)),
	addCorrect: () => dispatch(addCorrect())
});


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Game);
