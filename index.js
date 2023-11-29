const express= require('express')
const routerMain=require('./src/router/main')
const routerApp=require('./src/router/admin')
const routerLogin=require('./src/router/auth')
const app=express();
const port = process.env.PORT ||3000;
const bodyParser=require('body-parser')

// const LocalStrategy = require('passport-local');
const session = require('express-session')
const passport = require('passport')


app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))
app.use(passport.initialize()) 
app.use(passport.session()) 

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routerMain)
app.use('/admin',routerApp)
app.use('/login',routerLogin)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})