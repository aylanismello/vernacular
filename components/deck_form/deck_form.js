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
import DeckIndexContainer from '../decks/decks_index_container';

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
		let deck = new Array(1).fill("");
		this.state = {deck, title: '', to: 'Japanese', height: 600};

		this.updateText = this.updateText.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
		this.updateTo = this.updateTo.bind(this);
		this._addMoreWordsInput = this._addMoreWordsInput.bind(this);
		this._handlePress = this._handlePress.bind(this);
		this.validateInputs = this.validateInputs.bind(this);
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

	_addMoreWordsInput(event) {
		event.preventDefault();
		const currentDeck = [];
		this.state.deck.forEach((word) => {
			currentDeck.push(word);
		});
		currentDeck.push("");
		this.refs.wordInput.measure((x, y, width, height, pageX, pageY) => {
			this.setState({height: this.state.height + height});
		});
		this.setState({deck: currentDeck});
	}

	_handlePress() {
		this.props.nav.push({component: DeckIndexContainer});

		const requestBody = {
			deck: this.state.deck,
			title: this.state.title,
			to: LANGUAGES[this.state.to]
		};

		this.props.submitDeck(requestBody);
	}

	validateInputs() {
		if (this.state.title === "") {
			return false;
		}

		let valid = true;
		this.state.deck.forEach((input) => {
			if (input === "") {
				valid = false;
			}
		});

		return valid;
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
			if (idx === 0) {
				return (
					<View
						key={idx}
						style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}
						ref="wordInput">
						<TextInput
							key={idx}
							style={styles.wordInput}
							placeholder={"Practice Word"}
							onChangeText={text => this.updateText(text, idx)}
							/>
					</View>
				);
			} else {
				return (
					<View
						key={idx}
						style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
						<TextInput
							key={idx}
							style={styles.wordInput}
							placeholder={"Practice Word"}
							onChangeText={text => this.updateText(text, idx)}
							/>
					</View>
				);
			}

		});

		let postDisabled = true;
		if (this.validateInputs()) {
			postDisabled = false;
		}

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
						onPress={() => this._handlePress()}
						disabled={postDisabled}>
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
