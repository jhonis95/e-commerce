const express= require('express')
const router=require('./src/router/main')
const app=express();
const port = 3000


app.use('/',router)
app.use('/admin',router)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})