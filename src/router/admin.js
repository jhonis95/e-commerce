const express = require('express');
const { Passport } = require('passport/lib');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
  });
  // define the home page route
  router.get('/', (req, res)=> {
    const ob=req.sessionStore.sessions[req.sessionID]
    console.log(ob)
    res.render('../src/views/dashboard/index.ejs');
  });
  module.exports = router;