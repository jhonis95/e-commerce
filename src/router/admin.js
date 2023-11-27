const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('admin')
    next();
  });
  // define the home page route
  router.get('/', function(req, res) {
    res.render('../src/views/dashboard/index.ejs');
  });
  module.exports = router;