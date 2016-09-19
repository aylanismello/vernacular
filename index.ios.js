import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './frontend/components/app_container';
import { Provider } from 'react-redux';
import configureStore from './frontend/store/store';



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
      <View style={styles.container}>
        <Root store={this.store}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Words', () => Words);
