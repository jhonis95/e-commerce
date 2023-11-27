const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', async function(req, res) {
    res.render('../src/views/public/login.ejs');

  });
  module.exports = router;