
const home = (req,res)=>{
    res.render('pages/index');
};
const aboutUs = (req,res)=>{
    res.render('pages/about')
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