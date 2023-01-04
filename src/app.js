const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const { sequelize } = require('../sequelize/models');
const app = express();
const port = 3000;

const router = require('./routes');
const render = require('../render');

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

app.listen(port, () => {
    console.log(port, '원조집 OPEN');
});
