import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './components/app_container';
import { Provider } from 'react-redux';
import configureStore from './store/store';



const Root = ({store}) => (
	<Provider store={store}>
		<AppContainer/>
	</Provider>
);


class Words extends Component {

  constructor(props) {
    super(props);
    this.store = configureStore();

  }

  render() {
    return (
      <View>
        <Root store={this.store}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Words', () => Words);
