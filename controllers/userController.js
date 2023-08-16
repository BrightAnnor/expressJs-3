
const home = (req,res)=>{
    res.render('pages/index');
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