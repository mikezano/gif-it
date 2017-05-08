module.exports = (app, db)=>{
	app.post('/notes', (req, res)=>{
		//Create

		const note = {text: req.body.body, title: req.body.title};
		db.collection('notes').insert(note, (err, result) =>{
			if(err)
				res.send({'error': 'An error has ocurred'});
			else
				res.send(result.ops[0]);
		})
		//console.log(req.body);
		//res.send('Hello');
	})

	app.get('/notes')
};