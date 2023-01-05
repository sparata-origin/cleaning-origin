const jwt = require('jsonwebtoken');
const { Users } = require('../../sequelize/models');
require('dotenv').config();
const env = process.env;

module.exports = (req, res, next) => {
    const { cookie } = req.headers;
    if (!cookie) {
        res.locals.user = false
        next();
        return
    }
    // authType: user , authToken: 토큰 값
    const [authType, authToken] = cookie.split('=');
    if (!authToken || authType !== 'user') {
        res.locals.user = false
        next();
        return
    }
    try {
        const { userId } = jwt.verify(authToken, env.JWT_SECRETKEY);
        Users.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        res.locals.user = false
        next();
    }
};
