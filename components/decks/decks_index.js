import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  ListView,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button';
import DeckMenuContainer from '../deck_menu/deck_menu_container';
import Orientation from 'react-native-orientation';
import DeckMenu from '../deck_menu/deck_menu';
import DeckFormContainer from '../deck_form/deck_form_container';


class DecksIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: Orientation.getInitialOrientation()
    };

    this._redirectToCreateDeck = this._redirectToCreateDeck.bind(this);
    this._redirectToDeck = this._redirectToDeck.bind(this);
    this._orientationDidChange = this._orientationDidChange.bind(this);
  }

  _redirectToCreateDeck() {
    this.props.nav.push({component: DeckFormContainer, title: "Create Deck"});
  }

  _redirectToDeck(idx, deck) {
    this.props.nav.push({component: DeckMenuContainer, title: deck.title});
    this.props.updateDeckIdx(idx);
  }

  _orientationDidChange(orientation) {
    this.setState({orientation: orientation});
  }

  componentDidMount() {
    // Orientation.unlockAllOrientations();
    Orientation.lockToPortrait();
    Orientation.addOrientationListener(this._orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    if (this.props.decks) {
      const decksArr = this.props.decks.map((deck, index) => {
        return (
          <TouchableHighlight
            key={index}
            underlayColor={"#D4E9F2"}
            style={styles.indexDeckContainer}
            onPress={this._redirectToDeck.bind(this, index, deck)}>
            <View>
              <Text style={styles.deckHeader}>{deck.title}</Text>
              <Text style={styles.practiceLink}>
                {deck.deck.length} words
              </Text>
            </View>
          </TouchableHighlight>
        );
      });

      let scrollViewStyle, addDeckButtonContainerStyle;

      if (this.state.orientation === "LANDSCAPE") {
        scrollViewStyle = styles.containerLandscape;
        addDeckButtonContainerStyle = styles.addDeckButtonContainerLandscape;
      } else {
        scrollViewStyle = styles.container;
        addDeckButtonContainerStyle = styles.addDeckButtonContainer;
      }

      let scrollHeight;
      if (this.props.decks.length <= 6) {
        scrollHeight = 530;
      } else {
        scrollHeight = 530 + 90 * (this.props.decks.length - 6);
      }

      return (
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{
              flex: 0.9,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D4E9F2',
              height: scrollHeight
            }}>
            {decksArr}
          </ScrollView>
          <View style={addDeckButtonContainerStyle}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4E9F2',
    height: 530
  },
  containerLandscape: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4E9F2',
    height: 285
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
    padding: 5,
    fontSize: 14
  },
  indexDeckContainer: {
    flex: 1,
    margin: 5
  },
  addDeckButtonContainer: {
    flex: 0.1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0
  },
  addDeckButtonContainerLandscape: {
    flex: 0.1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 245
  },
  addDeck: {
    backgroundColor: '#4891C0',
    color: "#fff",
    width: 250,
    padding: 5,
    marginRight: 5,
    borderRadius: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default DecksIndex;
