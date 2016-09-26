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



const Root = ({store}) => (
	<Provider store={store}>
		<NavigatorIOS
      barTintColor="#fff"
      tintColor="#4891C0"
      titleTextColor="#4891C0"
      initialRoute={{
        component: AppContainer,
        title: "Vernacular"
      }}
      style={{flex: 1}}
    />
	</Provider>
);


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
