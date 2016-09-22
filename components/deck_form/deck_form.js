import React from 'react';
import * as _ from 'lodash';
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	PickerIOS,
	ScrollView,
	Dimensions
} from 'react-native';
import Button from 'react-native-button';

const LANGUAGES = {
	Chinese: "zh",
	English: "en",
	French: "fr",
	Japanese: "ja",
	Korean: "ko",
	Portuguese: "pt",
	Spanish: "es"
};

class DeckForm extends React.Component {
	constructor(props) {
		super(props);
		this.deleteFirstDeck = this.deleteFirstDeck.bind(this);
		let deck = new Array(5).fill("");
		this.state = {deck, title: '', to: 'Chinese', height: 650};
	}

	updateText(text, idx) {

		let deck = _.merge([], this.state.deck);
		deck[idx] = text;
		this.setState({deck});

	}

	updateTitle(title) {
		this.setState({title});
	}

	updateTo(language) {
		this.setState({to: language});
	}

	deleteFirstDeck(e) {
		e.preventDefault();
		this.props.deleteDeck(this.props.decks[0]._id);
	}

	_handlePress() {
		const requestBody = {
			deck: this.state.deck,
			title: this.state.title,
			to: LANGUAGES[this.state.to]
		};

		this.props.submitDeck(requestBody);
	}


	render() {
		let title = (
			<View>
				<Text style={styles.deckTitle}>Title</Text>
				<TextInput
					style={styles.titleInput}
					placeholder="Title of Deck"
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
				<ScrollView
					contentContainerStyle={{marginLeft: 15, flex: 1, height: this.state.height}}>
					{title}
					<PickerIOS
						selectedValue={this.state.to}
						onValueChange={(language) => this.updateTo(language)}>
						{Object.keys(LANGUAGES).map((language) => (
							<PickerIOS.Item
								key={language}
								value={language}
								label={language}
							/>
						))}
					</PickerIOS>
					{deck}
					<Button
					style={{fontSize: 20, color: '#607d8b'}}
					styleDisabled={{color: 'red'}}
					onPress={() => this._handlePress()}>
						Press Me!
					</Button>
					<Button onPress={this.deleteFirstDeck}>Delete First Deck</Button>
				</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	form: {
		marginLeft: 15,
		flex: 1
	},
	deckTitle: {
		fontSize: 16,
		padding: 3,
		color: "#4891C0"
	},
	titleInput: {
		flex: 1,
		height: 40,
		padding: 5,
		width: 250,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5
	}
});

export default DeckForm;
