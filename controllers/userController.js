
const home = (req,res)=>{
    res.render('pages/index');
};
const aboutUs = (req,res)=>{
    res.render('pages/about')
};
const post = (req,res)=>{
    res.render('pages/post')
};
const contact = (req,res)=>{
    res.render('pages/contact')
};

module.exports ={
    home,
    aboutUs,
    post,
    contact
};