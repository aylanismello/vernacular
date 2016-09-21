import { connect } from 'react-redux';
import DeckForm from './deck_form';
import { submitDeck, deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		decks: state.deck.decks
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submitDeck: deck => dispatch(submitDeck(deck)),
		deleteDeck: deckId => dispatch(deleteDeck(deckId))

	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(DeckForm);
