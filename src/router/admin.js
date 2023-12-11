const express = require('express');
const router = express.Router();

router.use(express.static("public"));
const data={
  siteName:'CMS',
  headLinks:[
    '<link rel="stylesheet" type="text/css" href="css/dashboard.css">'
  ],
  main:'home'
}

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    if (req.isAuthenticated()) { return next(); } //protecting the route from not authenticated users
    res.redirect('/login')
  });
  // define the home page route
  router.get('/', (req, res)=> {
    data.user=req.user
    data.main='home'
    res.render('../src/views/pages/dashboard.ejs',data);
  });
  router.get('/products',(req,res)=>{
    data.user=req.user
    data.main='products'
    res.render('../src/views/pages/dashboard.ejs',data);
  })
  module.exports = router;