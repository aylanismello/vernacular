// import $

// const key = `trnsl.1.1.20160918T223801Z.eaa84d85204ec253.b4eab8bdd8de2b10c4fba4bdc766ea9f7dd6876b`;
// const translate = require('yandex-translate-api')(key);


// translate.translate('You ', { to: 'ru' }, function(err, res) {
//   console.log(res.text);
// });

// translate.detect('Граждане Российской Федерации имеют право собираться мирно без оружия, проводить собрания, митинги и демонстрации, шествия и пикетирование', function(err, res) {
// });


const postEndpoint = `https://my-words-api.herokuapp.com/words`;


export const submitWords = (words) => {


	// let payload = JSON.stringify({
	// 	word: [
	// 		'one', 'two', 'three', 'four', 'five'
	// 	]
	// });
	let payload = JSON.stringify({a: 1, b: 2});

	fetch(postEndpoint, ({
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: payload
	}))
	.then(data => {
		console.log(`got ${data}`);
		console.log(`the payload: ${payload}`);
		debugger;
	})
	.catch(error => {
		console.log(`failed with ${error}`);
	});



};
