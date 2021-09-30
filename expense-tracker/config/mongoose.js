const mongoose = require('mongoose');
const colors = require('colors');

mongoose.connect(`mongodb://localhost/expense-development`);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to mongo db'));
db.once('open',function(){
     console.log(colors.cyan("database successfully connected"));
});


module.exports = db;