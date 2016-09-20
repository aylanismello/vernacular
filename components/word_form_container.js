import { connect } from 'react-redux';
import WordForm from './word_form';
import { submitDeck } from '../actions/deck_actions';

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
)(WordForm);
