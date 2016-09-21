import { connect } from 'react-redux';
import App from './app';
import { getDecks } from '../actions/deck_actions';
import { setNav } from '../actions/nav_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		deck: state.deck
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getDecks: () => dispatch(getDecks()),
		setNav: (nav) => dispatch(setNav(nav))
	};
};


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App);
