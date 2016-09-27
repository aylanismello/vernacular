import React from 'react';
import {
	ScrollView,
	Text,
	View } from 'react-native';
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

					<View>
						<Text> {this.props.correctCount} correct. </Text>
						<Text> {this.props.incorrectCount} incorrect. </Text>
					</View>
					<View>
						<Button onPress={this._redirectToPlay.bind(this)}>
							Play Again
						</Button>
						<Button onPress={this._redirectToDecksIndex}>
							Done
						</Button>
					</View>


			</ScrollView>
		);
	}
}


export default GameResults;
