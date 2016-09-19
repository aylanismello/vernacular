// import $

// const key = `trnsl.1.1.20160918T223801Z.eaa84d85204ec253.b4eab8bdd8de2b10c4fba4bdc766ea9f7dd6876b`;
// const translate = require('yandex-translate-api')(key);


// translate.translate('You ', { to: 'ru' }, function(err, res) {
//   console.log(res.text);
// });

// translate.detect('Граждане Российской Федерации имеют право собираться мирно без оружия, проводить собрания, митинги и демонстрации, шествия и пикетирование', function(err, res) {
// });


const postEndpoint = `localhost:8080/api/words`;


export const submitWords = (words) => {

	// console.log(words);
	// const xhr = new XMLHttpRequest();
	// xhr.open('GET', postEndpoint);
	// xhr.send(null);
	//
	//
	// xhr.onreadystatechange = () => {
	//   var DONE = 4; // readyState 4 means the request is done.
	//   var OK = 200; // status 200 is a successful return.
	//   if (xhr.readyState === DONE) {
	//     if (xhr.status === OK)
	//       console.log(xhr.responseText); // 'This is the returned text.'
	//     } else {
	//       console.log('Error: ' + xhr.status); // An error occurred during the request.
	//     }
	//   }
	// };



};


// { "title": "french 2", "wordSet":
// [{"source": "hello", "destination": "salut"},
// {"source": "bye", "destination": "adieu"},
// {"source": "no worries", "destination": "pas de stress"},
// {"source": "bread", "destination": "pain"}, {"source": "friend", "destination": "ami"} ]   }
