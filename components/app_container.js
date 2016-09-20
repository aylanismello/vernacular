import { connect } from 'react-redux';
import App from './app';
import { receiveDecks } from '../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		deck: state.deck
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
)(App);
