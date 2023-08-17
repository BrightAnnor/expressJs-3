const express = require('express');
const {home,aboutUs,post,contact} = require('../controllers/userController')

//server extension
const app = express.Router();

app.get('/',home);
app.get('/about-us',aboutUs);
app.get('/post',post);
app.get('/contact',contact);



module.exports = app