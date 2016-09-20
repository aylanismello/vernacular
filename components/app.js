import React from 'react';
import { Text, TextInput, View } from 'react-native';
import DeckFormContainer from './deck_form/deck_form_container';
import DecksIndexContainer from './decks/decks_index_container';

class App extends React.Component {

	constructor(props) {
		super(props);
	}


	componentDidMount() {
		this.props.receiveDecks();
	}


	render() {
		return (
		<View>
			<DecksIndexContainer/>
		</View>
		);
	}

}

export default App;
