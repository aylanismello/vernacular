const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri =`mongodb://aylan:aylanftw@ds033116.mlab.com:33116/aylan-rules`;

mongoose.Promise = global.Promise;


mongoose.connect(uri)
	.then(() => {
		console.log('successful connection to db, listen at port on server');
		app.listen(port);

	})
	.catch(err => console.log(err));

const DeckSchema = new mongoose.Schema({
  deck: Array,
	title: String,
	updated_at: {type: Date, default: Date.now}
});

const Deck = mongoose.model('Deck', DeckSchema);

console.log(`server started at localhost: ${port}`);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/words', (req, res) => {
	console.log(req.body);
	let deckJSON = req.body;

	let title = deckJSON.title;
	let deckArr = deckJSON.deck;

	let deck = new Deck({deck: deckArr, title});

	deck.save(err => {
		if(err)
			console.log(err);
		else
			console.log(deck);
		});

	res.send(`${title} ${deck}`);

});

app.get('/api/words', (req, res) => {
	Deck.find((err, decks) => {
		if(err) return console.log(`error! ${err}`);
		console.log(`the sets are ${decks}`);
		res.send(decks);
	});
});
