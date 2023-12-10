const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    if (req.isAuthenticated()) { return next(); } //protecting the route from not authenticated users
    res.redirect('/login')
  });
  // define the home page route
  router.get('/', (req, res)=> {
    const sessionData={
      user:req.user
    }
    res.render('../src/views/dashboard/index.ejs',sessionData);
  });
  module.exports = router;