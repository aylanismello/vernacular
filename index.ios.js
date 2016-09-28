import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator
} from 'react-native';
import AppContainer from './components/app_container';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import DeckFormContainer from './components/deck_form/deck_form_container';

class Root extends Component {
  constructor(props) {
    super(props);

    this._addDeck = this._addDeck.bind(this);
  }

  _addDeck() {
    this.refs.nav.push({
      component: DeckFormContainer,
      title: "Create Deck"
    });
  }

  render() {
    return (
      <Provider store={this.props.store}>
    		<NavigatorIOS
          ref="nav"
          barTintColor="#fff"
          tintColor="#4891C0"
          titleTextColor="#4891C0"
          initialRoute={{
            component: AppContainer,
            title: "Vernacular",
            rightButtonTitle: "+Add Deck",
            onRightButtonPress: () => this._addDeck()
          }}
          style={{flex: 1}}
        />
    	</Provider>
    );
  }
}

class Words extends Component {

  constructor(props) {
    super(props);
    this.store = configureStore();

  }

  render() {
    return (
      <Root store={this.store}/>
    );
  }
}

AppRegistry.registerComponent('Words', () => Words);
