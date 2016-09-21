import React from 'react';
import * as _ from 'lodash';
import { Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';

class DeckForm extends React.Component {
	constructor(props) {
		super(props);
		this.deleteFirstDeck = this.deleteFirstDeck.bind(this);
		let deck = new Array(5).fill("");
		this.state = {deck, title: '', to: 'ko'};
	}

	updateText(text, idx) {

		let deck = _.merge([], this.state.deck);
		deck[idx] = text;
		this.setState({deck});

	}

	updateTitle(title) {
		this.setState({title});
	}

	deleteFirstDeck(e) {
		e.preventDefault();
		this.props.deleteDeck(this.props.decks[0]._id);
	}

	_handlePress() {
		this.props.submitDeck(this.state);
	}


	render() {
		let title = (
			<View>
				<Text>Title</Text>
				<TextInput
					style={{height: 40}}
					placeholder="TITLE PLZ"
					onChangeText={text => this.updateTitle(text)}
					/>
				</View>

		);

		let deck = this.state.deck.map((word, idx) => {
			let placeholder = `word ${idx}!`;
			return (
				<View key={idx}>
					<Text>{placeholder} </Text>
					<TextInput
						key={idx}
						style={{height: 40}}
						placeholder={placeholder}
						onChangeText={text => this.updateText(text, idx)}
						/>
					</View>
			);

		});


		return(
			<View>
				{title}
				<Button onPress={this.props.redirectToDecksIndex}>Back to Decks</Button>
				<Button onPress={this.deleteFirstDeck}>Delete First Deck</Button>
				{deck}
				<Button
				style={{fontSize: 20, color: '#607d8b'}}
				styleDisabled={{color: 'red'}}
				onPress={() => this._handlePress()}>
				Press Me!
			</Button>
			</View>
		);
	}
}



export default DeckForm;
