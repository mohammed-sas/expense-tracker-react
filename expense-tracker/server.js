const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const db = require('./config/mongoose');
const app = express();


dotenv.config({path : './config/config.env'});

// this allows us to use body parser
app.use(express.json());

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}
app.use('/',require('./routes'));
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}
const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));