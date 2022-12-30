const express = require('express');
const { sequelize } = require('../sequelize/models');
const app = express();
const port = 3000;

const router = require('./routes');

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

app.listen(port, () => {
    console.log(port, '원조집 OPEN');
});
