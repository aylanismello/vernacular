import { connect } from 'react-redux';
import App from './app';
import { tick } from '../actions/word_actions';

const mapStateToProps = (state, ownProps) => {


	return {
		words: state.word.words
	};
};


export default connect (
	mapStateToProps
)(App);
