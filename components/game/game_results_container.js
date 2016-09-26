import { connect } from 'react-redux';
import GameResults from './game_results';

const mapStateToProps = state => {
	let correctCount = state.game.correctCount;

	let deck = state.deck.decks[state.deck.deckIdx].deck;
	let incorrectCount = deck.length - correctCount;
	let deckTitle = state.deck.decks[state.deck.deckIdx].title;

	return {
		deckTitle,
		correctCount,
		incorrectCount,
		nav: state.nav.nav
	};
};

export default connect (
	mapStateToProps
)(GameResults);
