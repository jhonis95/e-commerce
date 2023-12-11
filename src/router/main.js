const express = require('express');
const router = express.Router();

const data={
  siteName:'Giselle Shop',
  headLinks:[
    '<link rel="stylesheet" href="css/home.css"></link>'
  ]
}
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', function(req, res) {
    res.render('../src/views/pages/index.ejs',data);
  });
  
  module.exports = router;