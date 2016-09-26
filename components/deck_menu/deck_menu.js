import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import SettingsContainer from '../settings/settings_container';
import ReviewContainer from '../review/review_container';
import GameContainer from '../game/game_container';

class DeckMenu extends React.Component {
  constructor(props) {
    super(props);

    this._redirectToSettings = this._redirectToSettings.bind(this);
    this._redirectToReview = this._redirectToReview.bind(this);
    this._redirectToPlay = this._redirectToPlay.bind(this);

    this.state = {
      cards: this.props.deck[0],    // Need to shuffle and get the deck
      currentIdx: 0
    };
  }

  _redirectToSettings() {
    this.props.nav.push({component: SettingsContainer, title: "Settings"});
  }

  _redirectToReview() {
    this.props.nav.push({component: ReviewContainer, title: "Review"});
  }

  _redirectToPlay() {
    this.props.nav.push({component: GameContainer, title: "Play"});
  }


  render() {
    return (
      <View style={styles.menuContainer}>
        <Button
          onPress={this._redirectToPlay}
          style={styles.menuButton}>Play</Button>
        <Button
          onPress={this._redirectToReview}
          style={styles.menuButton}>Review</Button>
        <Button
          onPress={this._redirectToSettings}
          style={styles.menuButton}>Settings</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    flex: 1,
    backgroundColor: '#35CD80',
    width: 200,
    padding: 5,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#fff"
  }
});

export default DeckMenu;
