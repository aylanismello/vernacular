import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

class Hi extends React.Component {
	constructor(props) {
		super(props);
		let words = new Array(5).fill([]);
		this.state = {text: '', words};
	}



	updateText(text, idx) {

		let word = this.state.words[idx];
		this.setState({word: text});

		// debugger;
	}

	render() {
		console.log(this.state.words);
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

		// debugger;

		return(
			<View>
				{words}
			</View>
		);
	}
}



export default Hi;
