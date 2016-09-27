import { connect } from 'react-redux';
import DeckMenu from './deck_menu';
import { deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = (state) => ({
	nav: state.nav.nav,
	deck: state.deck.decks[state.deck.deckIdx]

});

const mapDispatchToProps = dispatch => ({
	deleteDeck: deckId => dispatch(deleteDeck(deckId))

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckMenu);
