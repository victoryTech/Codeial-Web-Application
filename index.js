const express = require('express');
const app = express();
//const port = 7000;
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);
//app.use(express.static('./assets'));

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        //console.log('Error', err);
        //instead of upper comment we can use next line code and this is called interpolation
        console.log(`Error in ruuning the server: ${err}`);
    }
    //to print port is running
    console.log(`Server is running on port: ${port}`);
 });