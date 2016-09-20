import React from 'react';
import { Text, TextInput, View } from 'react-native';
import WordFormContainer from './word_form_container';

class App extends React.Component {

	constructor(props) {
		super(props);
	}


	componentDidMount() {
		this.props.receiveDecks();
	}


	render() {
		return (
		<View>
			<WordFormContainer/>
		</View>
		);
	}

}

export default App;
