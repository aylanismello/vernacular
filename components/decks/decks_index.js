import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';
import Button from 'react-native-button';
import DeckMenu from '../deck_menu/deck_menu';
import DeckFormContainer from '../deck_form/deck_form_container';

class DecksIndex extends React.Component {
  constructor(props) {
    super(props);

    this._redirectToCreateDeck = this._redirectToCreateDeck.bind(this);
    this._redirectToDeck = this._redirectToDeck.bind(this);
  }

  _redirectToCreateDeck() {
    this.props.nav.push({component: DeckFormContainer, title: "Create Deck"});
  }

  _redirectToDeck(deck) {
    this.props.nav.push({component: DeckMenu, title: deck.title, passProps: { deck: deck}});
  }

  render() {
    if (this.props.decks) {
      const decksArr = this.props.decks.map((deck, index) => {
        return (
          <View key={index} style={styles.indexDeckContainer}>
            <Text style={styles.deckHeader}>{deck.title}</Text>
            <Button style={styles.practiceLink} onPress={this._redirectToDeck.bind(this, deck)}>Practice</Button>
          </View>
        );
      });

      return (
        <View>
          <ScrollView contentContainerStyle={styles.container}>
            {decksArr}
          </ScrollView>
          <View style={styles.addDeckButtonContainer}>
            <Button style={styles.addDeck} onPress={this._redirectToCreateDeck}>+Add Deck</Button>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            color={"#fff"}
            size={"small"}
            style={{margin: 15}} />
          <Text style={{color: "#fff"}}>Loading...</Text>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E9F2',
    height: 500
  },
  appHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
    color: '#4891C0',
    backgroundColor: '#fff'
  },
  deckHeader: {
    backgroundColor: '#35CD80',
    padding: 5,
    width: 200,
    textAlign: 'center',
    color: '#fff'
  },
  practiceLink: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#35CD80',
    padding: 3,
    fontSize: 12
  },
  indexDeckContainer: {
    margin: 5
  },
  addDeckButtonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    bottom: 0
  },
  addDeck: {
    backgroundColor: '#fff',
    width: 100,
    padding: 5,
    marginRight: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default DecksIndex;
