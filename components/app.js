import React from 'react';
import { Text, TextInput, View } from 'react-native';
import DeckFormContainer from './deck_form/deck_form_container';
import DecksIndexContainer from './decks/decks_index_container';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			componentSelected: "DecksIndex"
		};

		this.redirectToCreateDeck = this.redirectToCreateDeck.bind(this);
		this.redirectToDecksIndex = this.redirectToDecksIndex.bind(this);
	}

	redirectToCreateDeck(event) {
		event.preventDefault();
		this.setState({componentSelected: "DeckForm"});
	}

	redirectToDecksIndex(event) {
		event.preventDefault();
		this.setState({componentSelected: "DecksIndex"});
	}

	componentDidMount() {
		this.props.receiveDecks();
	}


	render() {
		if (this.state.componentSelected === "DecksIndex") {
			return (
				<View>
					<DecksIndexContainer redirectToCreateDeck={this.redirectToCreateDeck}/>
				</View>
			);
		} else if (this.state.componentSelected === "DeckForm") {
			return (
				<View>
					<DeckFormContainer redirectToDecksIndex={this.redirectToDecksIndex} />
				</View>
			);
		}
	}

}

export default App;
