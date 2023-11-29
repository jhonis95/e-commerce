const express = require('express');
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local');
const authUser=require('../controller/authController')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/',(req, res)=> {
  res.render('../src/views/public/login.ejs');
});
router.post('/',(req ,res)=>{
  const {companyID,companyPassword}=req.body
  passport.use(new LocalStrategy (authUser(companyID,companyPassword)))
})
module.exports = router;