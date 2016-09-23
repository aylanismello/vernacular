import { connect } from 'react-redux';
import Review from './review';

const mapStateToProps = (state, ownProps) => {
  let deckIdx = state.deck.deckIdx;
  return {
    deck: state.deck.decks[deckIdx]
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Review);
