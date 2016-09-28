import { connect } from 'react-redux';
import DecksIndex from './decks_index';
import { receiveDecks, updateDeckIdx, getDecks } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    decks: state.deck.decks,
    nav: state.nav.nav
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveDecks: () => dispatch(receiveDecks()),
    updateDeckIdx: deckIdx => dispatch(updateDeckIdx(deckIdx)),
    getDecks: () => dispatch(getDecks())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(DecksIndex);
