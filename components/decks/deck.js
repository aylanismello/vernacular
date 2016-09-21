import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.deck.deck[0],    // Need to shuffle and get the deck
      currentIdx: 0
    };
  }

  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text>This is the deck!</Text>
        <Button>Delete This Deck</Button>
      </View>
    );
  }
}

export default Deck;
