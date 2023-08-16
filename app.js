const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
// template engine
const ejs = require('ejs')

//configure dotenv
dotenv.config();


// port
const port = process.env.PORT || 2006;

//server
const app = express();

// middleWare
app.use('/',userRoute);
//middle ware to read css files]
app.use(express.static('public'));

//to set your own folder to check fo static files use
// app.set('views')
// and set your folder from views to what you want.

// to change the default .html file to .ejs template engine and read it.
app.set('view engine','ejs')


//serverlisten
app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
});