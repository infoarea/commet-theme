
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayout = require('express-ejs-layouts');
const cometApp = require('./routes/cometRoute')


//express init
const app = express();

//env config
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

//Form data manage
app.use(express.json());
app.use(express.urlencoded( { extended : false } ))

//Satic folder
app.use(express.static('public'));

//ejs init
app.set("view engine", "ejs");

app.use(expressLayout);
app.set('layout', 'layouts/app')



//Route
app.use('/comet', cometApp)


//server listen
app.listen(PORT, ()=>{
    console.log(`Server is running`.bgGreen.black);
});