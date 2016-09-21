
const postEndpoint = `https://my-words-api.herokuapp.com/api/words`;
// const postEndpoint = `http://localhost:8080/api/words`;


const err = errors => {
	console.log(`got errors: ${errors}`);
};

const AJAX = (method, success, data=null, error=err) => {

	const xhr = new XMLHttpRequest();
	xhr.open(method, postEndpoint);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	if (data) {
		data = JSON.stringify(data);
	}

	xhr.send(data);



	xhr.onreadystatechange = () => {
		let DONE = 4; //
		let OK = 200; //
		if (xhr.readyState === DONE) {
			if (xhr.status === OK)
				success(xhr.responseText);
			} else {
				error(xhr.responseStatus);
			}
	};

};


export const submitDeck = (deck, success) => {

	AJAX('POST', success, deck);
};

export const getDecks = (success) => {
	AJAX('GET', success);

};
