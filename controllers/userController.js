const fs = require('fs')

const home = (req,res)=>{
   const data= fs.readFileSync(__dirname+'/../views/index.html',{encoding:'utf-8'});
    res.send(data);
};
const aboutUs = (req,res)=>{
    res.send('About Us')
};
const services = (req,res)=>{
    res.send('Service')
};
const contact = (req,res)=>{
    res.send('Contact')
};

module.exports ={
    home,
    aboutUs,
    services,
    contact
};