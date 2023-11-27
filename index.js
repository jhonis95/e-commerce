const express= require('express')
const routerMain=require('./src/router/main')
const routerApp=require('./src/router/admin')
const routerLogin=require('./src/router/auth')
const app=express();
const port = 3000;


app.set('view engine', 'ejs')
app.use(express.static("public"));

app.use('/',routerMain)
app.use('/admin',routerApp)
app.use('/login',routerLogin)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})