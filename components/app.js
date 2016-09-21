import React from 'react';
import { Text, TextInput, View } from 'react-native';
import DeckFormContainer from './deck_form/deck_form_container';

class App extends React.Component {

	constructor(props) {
		super(props);
	}


	componentDidMount() {
		this.props.getDecks();
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {
		return (
		<View>
			<DeckFormContainer/>
		</View>
		);
	}

}

export default App;
