const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        //console.log('Error', err);
        //instead of upper comment we can use next line code and this is called interpolation
        console.log(`Error in ruuning the server: ${err}`);
    }
    //to print port is running
    console.log(`Server is running on port: ${port}`);
 });