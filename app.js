const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');

//configure dotenv
dotenv.config();


// port
const port = process.env.PORT || 2006;

//server
const app = express();

// middleWare
app.use('/',userRoute);


//serverlisten
app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
});