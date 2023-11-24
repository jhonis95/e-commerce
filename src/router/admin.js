const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/admin', function(req, res) {
    res.send('Birds home page');
  });
  module.exports = router;