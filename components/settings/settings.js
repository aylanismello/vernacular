import React from 'react';
import {
  Text,
  View,
  StyleSheet
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
        <View style={styles.addDeckButtonContainer}>
          <Button style={styles.addDeck} onPress={this._handleDeckDelete}>Delete Deck</Button>
        </View>
        <Button>Edit This Deck</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addDeckButtonContainer: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    marginTop: 3
  },
  addDeck: {
    backgroundColor: '#4891C0',
    color: "#fff",
    width: 100,
    padding: 5,
    marginRight: 5,
    borderRadius: 5
  }
});

export default Settings;
