import { connect } from 'react-redux';
import Settings from './settings';
import { deleteDeck, updateDeckIdx } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
	let deckIdx = state.deck.deckIdx;
	return {
		deckIdx,
		decks: state.deck.decks,
		// deckMongoId: state.deck.decks[deckIdx]._id,
		nav: state.nav.nav
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteDeck: deckId => dispatch(deleteDeck(deckId)),
		updateDeckIdx: deckIdx => dispatch(updateDeckIdx(deckIdx))
	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Settings);
