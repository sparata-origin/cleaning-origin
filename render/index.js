const express = require('express');
const router = express.Router();
const logincheck = require('../src/middleware/logincheck');

router.get('/', logincheck, (req, res) => {
  if(res.locals.user){
    res.render('index.ejs',{ login : true})
  }
  res.render('index.ejs', {login : false})
})

router.get('/index', logincheck, (req, res) => {
  if(res.locals.user){
    res.render('index.ejs',{ login : true })
  }
  res.render('index.ejs', {login : false})
})

router.get('/status', logincheck, (req, res) => {
  if (res.locals.user.isBusiness){
    res.render('businessstatus.ejs')
  } else if (res.locals.user.isBusiness === false) {
    res.render('customerstatus.ejs')
  } else {
    res.render('404.ejs')
  }
  
})

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

module.exports = router;