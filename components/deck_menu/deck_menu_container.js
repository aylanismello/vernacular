import { connect } from 'react-redux';
import DeckMenu from './deck_menu';

const mapStateToProps = (state) => ({
	nav: state.nav.nav,
	deck: state.deck.decks[state.deck.deckIdx]
});

export default connect(
	mapStateToProps
)(DeckMenu);
