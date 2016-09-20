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
      wordSet: this.props.deck.wordSet[0],    // Need to shuffle and get the deck
      currentIdx: 0
    };
  }

  render() {
    return (
      <View>
        <Text>This is the deck!</Text>
      </View>
    );
  }
}

export default Deck;
