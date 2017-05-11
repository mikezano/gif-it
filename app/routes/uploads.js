var ObjectID = require('mongodb').ObjectID;
var fileUpload = require('express-fileupload');

module.exports = (app) =>{

	app.use(fileUpload());

	app.post('/upload', (req, res)=>{
		console.log(req);
		var file = req.files.gif;
		console.log(file);
		// const id = req.params.id;
		// const details = { '_id': new ObjectID(id)};
		// db.collection('notes').findOne(details, (err, item)=>{
		// 	if(err){
		// 		res.send({'error': 'An error has occurred'});
		// 	}
		// 	else{
		// 		res.send(item);
		// 	}
		// });
		res.send("Done!");
	});
};