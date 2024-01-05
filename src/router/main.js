const express = require('express');
const router = express.Router();
const fs = require('fs')
// let images = '<%- JSON.stringify(images)%>' for front end

const back1=fs.readFileSync('./src/storage/site/back1.jpg',(err,data)=>{
  if (err) throw err;
  console.log('sended image')
})
const back2=fs.readFileSync('./src/storage/site/back2.jpg',(err,data)=>{
  if (err) throw err;
  console.log('sended image')
})
const back3=fs.readFileSync('./src/storage/site/back3.jpg',(err,data)=>{
  if (err) throw err;
  console.log('sended image')
})


const data={
  siteName:'Giselle Shop',
  headLinks:[
    '<link rel="stylesheet" href="css/home.css"></link>'
  ],
  images:{
    header:{
      background:[
        back1.toString('base64'),
        back2.toString('base64'),
        back3.toString('base64')
      ]
    }
  }
}
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', function(req, res) {
    res.render('../src/views/pages/index.ejs',data);
  });
  router.get('/header',function(req,res){
    // Setting the headers
    res.writeHead(200, {
     "Content-Type": contentType
    });

  // Reading the file
  fs.readFile('./src/storage/site/back1.jpg',(err,data)=>{
    if (err) throw err;
    console.log('sended image')
  }),
  fs.readFile('./src/storage/site/back2.jpg',(err,data)=>{
    if (err) throw err;
    console.log('sended image')
  }),
  fs.readFile('./src/storage/site/back3.jpg',(err,data)=>{
    if (err) throw err;
    console.log('sended image')
  })
})
  
  module.exports = router;