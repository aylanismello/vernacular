import { connect } from 'react-redux';
import App from './app';
import { getDecks } from '../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		deck: state.deck
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getDecks: () => dispatch(getDecks())
	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App);
