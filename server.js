//server.js

const express	= 	require('express');
const MongoClient = 	require('mongodb').MongoClient;
const bodyParser = 	require('body-parser');
const db = 			require('./config/db');

const app = express();

const port = 8000;

app.use(express.static('./src/resources/gifs'));
app.use(bodyParser.urlencoded({extended:true}));

// MongoClient.connect(db.url, (err, database) =>{
// 	if(err) return console.log(err);
// 	require('./app/routes')(app, database);

// 	app.listen(port, ()=>{
// 		console.log("Live on port: " + port);
// 	});
// });

require('./app/routes')(app, {extended: true});

app.listen(port, ()=>{
	console.log("Live on port: " + port);
})