const express = require('express');
const {home,aboutUs,services,contact} = require('../controllers/userController')

//server extension
const app = express.Router();

app.get('/',home);
app.get('/about-us',aboutUs);
app.get('/services',services);
app.get('/contact',contact);



module.exports = app