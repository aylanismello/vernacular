import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import DecksIndexContainer from '../decks/decks_index_container';

class Settings extends React.Component {
  constructor(props) {
    super(props);

		this._handleDeckDelete = this._handleDeckDelete.bind(this);

    this.state = {
      currentIdx: 0
    };

  }

	_handleDeckDelete() {
		this.props.deleteDeck(this.props.deckMongoId);
		this.props.nav.push({component: DecksIndexContainer, title: 'Decks'});
	}


  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text>This is the deck!</Text>
        <Button onPress={this._handleDeckDelete}>Delete This Deck</Button>
        <Button>Edit This Deck</Button>
      </View>
    );
  }
}

export default Settings;
