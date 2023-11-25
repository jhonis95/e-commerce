const express = require('express');
const router = express.Router();

const user = {
  firstName: 'Tim',
  lastName: 'Cook',
  admin: true,
}

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', function(req, res) {
    res.render('../src/views/dashboard/index.ejs', {
      user
    });
  });
  
  module.exports = router;