const jwt = require('jsonwebtoken');
const { Users } = require('../../sequelize/models');
require('dotenv').config();
const env = process.env;

module.exports = (req, res, next) => {
    const { cookie } = req.headers;
    if (!cookie) {
        return res
            .status(401)
            .json({ errorMessage: '로그인 후 이용 가능합니다!' });
    }
    // authType: user , authToken: 토큰 값
    const [authType, authToken] = cookie.split('=');
    if (!authToken || authType !== 'user') {
        res.status(401).send({
            errorMessage: '로그인 후 이용 가능합니다!!',
        });
        return;
    }
    try {
        const { userId } = jwt.verify(authToken, env.JWT_SECRETKEY);
        Users.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        res.status(401).json({
            errorMessage: '로그인 후 이용 가능합니다!!!!!!!!!!',
        });
    }
};
