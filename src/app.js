const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('../sequelize/models');
const app = express();
const port = 3000;

const router = require('./routes');

app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공!');
    })
    .catch((err) => {
        console.error(err);
    });

// 쿠키 확인용(임시)
app.get('/', (req, res) => {
    console.log('req:cookies:', req.cookies.user);
    res.send('OK');
});

app.listen(port, () => {
    console.log(port, '원조집 OPEN');
});
