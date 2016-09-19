import React from 'react';
import * as _ from 'lodash';
import { Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';

class WordForm extends React.Component {
	constructor(props) {
		super(props);
		let words = new Array(5).fill("");
		this.state = {text: '', words};
	}



	updateText(text, idx) {

		let words = _.merge([], this.state.words);
		words[idx] = text;
		this.setState({words});

	}

	_handlePress() {
		console.log(this.state.words);
		this.props.submitWords(this.state.words);
	}

	render() {

		let words = this.state.words.map((word, idx) => {
			let placeholder = `word ${idx}!`;
			return (
				<View key={idx}>
					<Text>{placeholder} </Text>
					<TextInput
						key={idx}
						style={{height: 40}}
						placeholder={placeholder}
						onChangeText={text => this.updateText(text, idx)}
						/>
					</View>
			);

		});


		return(
			<View>
				{words}
				<Button
				style={{fontSize: 20, color: '#607d8b'}}
				styleDisabled={{color: 'red'}}
				onPress={() => this._handlePress()}>
				Press Me!
			</Button>
			</View>
		);
	}
}



export default WordForm;
