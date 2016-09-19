import { connect } from 'react-redux';
import WordForm from './word_form';
import { submitWords } from '../actions/word_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		words: state.word.words
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submitWords: words => dispatch(submitWords(words))
	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(WordForm);
