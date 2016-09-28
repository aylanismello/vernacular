import React from 'react';
import {
	ScrollView,
	Text,
	View,
 	StyleSheet
} from 'react-native';
import Button from 'react-native-button';
import GameContainer from './game_container';
import DeckMenuContainer from '../deck_menu/deck_menu_container';
import DecksIndexContainer from '../decks/decks_index_container';
import DeckFormContainer from '../deck_form/deck_form_container';

class GameResults extends React.Component{

	constructor(props) {
		super(props);
		this.state = {height: 400};

		this._redirectToDecksIndex = this._redirectToDecksIndex.bind(this);
	}

	componentDidMount() {
		this.props.nav.replacePrevious({
			component: DeckMenuContainer,
			title: this.props.deckTitle
		});
	}

	_redirectToPlay() {
		this.props.nav.push({component: GameContainer, title: "Play"});
	}

	_redirectToDeckMenu() {
		this.props.nav.push(
			{component: DeckMenuContainer,
				title: this.props.deckTitle});
	}

	_redirectToDecksIndex() {
		this.props.nav.push({
			component: DecksIndexContainer,
			title: "Vernacular",
			leftButtonTitle: " ",
			rightButtonTitle: "+Add Deck",
      onRightButtonPress: () => this.props.nav.push({
        component: DeckFormContainer,
        title: "Create Deck"
      })
		});
	}

	render() {
		return (
			<ScrollView
				contentContainerStyle={{
					marginLeft: 15,
					marginRight: 15,
					flex: 1,
					height: this.state.height}}>

					<View style={{height: 200}}>
						<View style={styles.textContainer}>
							<Text style={styles.resultsText}> {this.props.correctCount} correct. </Text>
							<Text style={styles.resultsText}> {this.props.incorrectCount} incorrect. </Text>
						</View>
					</View>
					<View style={styles.buttonsContainer}>
						<Button
							onPress={this._redirectToPlay.bind(this)}
							style={styles.playAgainButton}>
							Play Again
						</Button>
						<Button
							onPress={this._redirectToDecksIndex}
							style={styles.doneButton}>
							Done
						</Button>
					</View>


			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	textContainer: {
		flex: 0.5,
		justifyContent: "center",
		alignItems: "center"
	},
	resultsText: {
		color: "#4891C0",
		fontSize: 20
	},
	buttonsContainer: {
		flex: 0.5,
		justifyContent: "center",
		alignItems: "center"
	},
	playAgainButton: {
		backgroundColor: "#35CD80",
		color: "#fff",
		width: 250,
		padding: 10,
		margin: 10,
		fontSize: 20,
		borderRadius: 5
	},
	doneButton: {
		backgroundColor: "#AA3939",
		color: "#fff",
		width: 250,
		padding: 10,
		margin: 10,
		fontSize: 20,
		borderRadius: 5
	}
});

export default GameResults;
