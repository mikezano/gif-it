const noteRoutes = require('./note_routes');
const uploads = require('./uploads');

module.exports = (app, db)=>{
	noteRoutes(app, db);
	uploads(app);
}