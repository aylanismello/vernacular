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
		// this.deleteFirstDeck = this.deleteFirstDeck.bind(this);
		let deck = new Array(1).fill("");
		this.state = {deck, title: '', to: 'Japanese', height: 650};

		this.updateText = this.updateText.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
		this.updateTo = this.updateTo.bind(this);
		this._addMoreWordsInput = this._addMoreWordsInput.bind(this);
		this._handlePress = this._handlePress.bind(this);
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

	// deleteFirstDeck(e) {
	// 	e.preventDefault();
	// 	this.props.deleteDeck(this.props.decks[0]._id);
	// }

	_addMoreWordsInput(event) {
		event.preventDefault();
		const currentDeck = [];
		this.state.deck.forEach((word) => {
			currentDeck.push(word);
		});
		currentDeck.push("");
		this.setState({deck: currentDeck});
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
			return (
				<View key={idx} style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
					<TextInput
						key={idx}
						style={styles.wordInput}
						placeholder={"Practice Word"}
						onChangeText={text => this.updateText(text, idx)}
						/>
					</View>
			);

		});

		return(
				<ScrollView
					contentContainerStyle={{
						marginLeft: 15,
						marginRight: 15,
						flex: 1,
						height: this.state.height}}>
					{title}
					<Text style={styles.languagePrompt}>Select the language you want to practice:</Text>
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
					<Text style={styles.wordsPrompt}>Enter words that you want translated:</Text>
					{deck}
					<View style={styles.moreWordsContainer}>
						<Button
							style={styles.moreWords}
							onPress={(event) => this._addMoreWordsInput(event)}>+</Button>
					</View>
					<Button
						style={{fontSize: 20, color: '#607d8b'}}
						styleDisabled={{color: 'red'}}
						onPress={() => this._handlePress()}>
						Press Me!
					</Button>
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
	},
	languagePrompt: {
		padding: 3,
		marginTop: 5,
		fontSize: 14,
		color: "#4891C0"
	},
	wordsPrompt: {
		padding: 3,
		fontSize: 14,
		color: "#4891C0"
	},
	wordInput: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		width: 250,
		margin: 5
	},
	moreWordsContainer: {
		flex: 0,
		justifyContent: 'center',
		flexDirection: 'row'
	},
	moreWords: {
		color: "#fff",
		backgroundColor: "#4891C0",
		width: 50,
		paddingBottom: 8,
		fontSize: 30,
		borderRadius: 5
	}
});

export default DeckForm;
