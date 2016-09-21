import { connect } from 'react-redux';
import DeckForm from './deck_form';
import { submitDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		deck: state.deck
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submitDeck: deck => dispatch(submitDeck(deck))
	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(DeckForm);
