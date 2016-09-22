import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import SettingsContainer from '../settings/settings_container';

class DeckMenu extends React.Component {
  constructor(props) {
    super(props);

    this._redirectToSettings = this._redirectToSettings.bind(this);

    this.state = {
      cards: this.props.deck[0],    // Need to shuffle and get the deck
      currentIdx: 0
    };
  }

  _redirectToSettings() {
    this.props.nav.push({component: SettingsContainer, title: "Settings"});
  }

  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text>This is the deck!</Text>
        <Button>Play</Button>
        <Button>Review</Button>
        <Button onPress={this._redirectToSettings}>Settings</Button>
        <Button>Delete This Deck</Button>
      </View>
    );
  }
}

export default DeckMenu;
