const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/admin', async function(req, res) {
    res.render('../src/views/public/login.ejs');
  });
  module.exports = router;