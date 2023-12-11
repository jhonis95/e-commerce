const express = require('express');
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local');
const authUser=require('../controller/authController')

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      username: user.name,
      test:'testando opcoes'
    });
  });
});
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new LocalStrategy(function verify(username, password, cb) {
  const user={
    name:username
  }
  if(username=='jonatan'&&password=='1234'){
    return cb(null, user, { message: 'É nois cachorro.' })
  }else{
    return cb(null, false, { message: 'Incorrect username or password.' })
  }
  // authUser(username,password)
}));

const data={
  siteName:'Login in',
  headLinks:[
    '<link rel="stylesheet" href="css/login.css">'
  ]
}

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/',(req, res)=> {
  res.render('../src/views/pages/login.ejs',data);
});
router.post('/',passport.authenticate('local', {
  successRedirect: "/admin",
  failureRedirect: "/login",
}))
// router.post('/',(req ,res)=>{
//   const {companyID,companyPassword}=req.body
//   // passport.use(new LocalStrategy (authUser(companyID,companyPassword)))
// })
module.exports = router;