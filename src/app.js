const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('../sequelize/models');
const { Server } = require("http");
const router = require('./routes');
const render = require('../render');
const path = require('path');

const app = express();
const http = Server(app);



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use('/', render);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../views'))); //정적파일, 이미지파일

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공!');
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = http;