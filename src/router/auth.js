const express = require('express');
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local');
const db=require('../model/dbconect')
const authController = require('../controller/authController')// the main strategy for makke the authentication

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      username: user.name,
      id:user.id
    });
  });
});
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new LocalStrategy(async function verify(username, password, cb) {
  try{
    const bdData= await authController.auth(username,password,db)
    console.log(bdData)
    const user={
      name:bdData.name,
      id:bdData.id
    }
    return cb(null, user, { message: 'É nois cachorro.' })
  }catch(err){
    console.log(err)
    return cb(null, false, { message: 'Incorrect username or password.' })
  }
  // if(username=='jonatan'&&password=='1234'){
  //   return cb(null, user, { message: 'É nois cachorro.' })
  // }else{
  //   return cb(null, false, { message: 'Incorrect username or password.' })
  // }
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
router.get('/', (req, res)=> {
  res.render('../src/views/pages/login.ejs',data);
});
//router to process the authentication
router.post('/',passport.authenticate('local', {
  successRedirect: "/admin",
  failureRedirect: "/login",
}))
module.exports = router;