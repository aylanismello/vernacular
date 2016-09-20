import { connect } from 'react-redux';
import DecksIndex from './decks_index';
import { receiveDecks } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    decks: state.deck.decks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveDecks: () => dispatch(receiveDecks())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(DecksIndex);
