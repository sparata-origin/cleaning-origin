const express = require('express');
const router = express.Router();
const logincheck = require('../src/middleware/logincheck');

router.get('/', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('index.ejs', { login: true });
    }
    res.render('index.ejs', { login: false });
});

router.get('/index', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('index.ejs', { login: true });
    }
    res.render('index.ejs', { login: false });
});

router.get('/status', logincheck, (req, res) => {
    if (res.locals.user.isBusiness) {
        res.render('businessstatus.ejs');
    } else if (res.locals.user.isBusiness === false) {
        res.render('customerstatus.ejs');
    } else {
        res.render('404.ejs');
    }
});

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.get('/services', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('servicedetail.ejs', { login: true });
    }
    res.render('servicedetail.ejs', { login: false });
});

router.get('/serviceApplication', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('serviceApplication.ejs', { login: true });
    }
    res.render('serviceApplication.ejs', { login: false });
});

router.get('/serviceUpdate', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('serviceUpdate.ejs', { login: true });
    }
    res.render('serviceUpdate.ejs', { login: false });
});

router.get('/business/review', logincheck, (req, res) => {
    if (res.locals.user) {
        res.render('writereview.ejs', { login: true });
    } else if (!res.locals.user) {
        res.render('writereview.ejs', { login: false });
    } else {
        res.render('404.ejs');
    }
});

module.exports = router;
