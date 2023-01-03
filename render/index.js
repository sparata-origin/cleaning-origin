const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs')
})

router.get('/index', (req, res) => {
  res.render('index.ejs')
})

router.get('/status', (req, res) => {
  res.render('status.ejs')
})

router.get('/login', (req, res) => {
  res.render('login.ejs')
})

module.exports = router;