const UsersService = require('../services/users.service');
const UsersVerify = require('../module/users.verify.module');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config/config');
require('dotenv').config();
const env = process.env;

// Users의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
    usersService = new UsersService();
    usersVerify = new UsersVerify();

    userRegister = async (req, res, next) => {
        try {
            const { email, nickname, confirm, phone, isBusiness } = req.body;
            let { password } = req.body;

            const passwordCheck = await this.usersVerify.checkPassword(
                password,
                confirm
            );

            if (passwordCheck === false) {
                return res
                    .status(412)
                    .json({ errorMessage: 'Password를 확인해주세요.' });
            }

            const emailCheck = await this.usersVerify.checkEmail(email);

            if (emailCheck === false) {
                return res
                    .status(412)
                    .json({ errorMessage: 'email 형식이 올바르지 않습니다.' });
            }

            password = await this.usersVerify.passwordEncryption(password);

            const createUserData = await this.usersService.userRegister(
                email,
                password,
                nickname,
                phone,
                isBusiness
            );

            if (!createUserData) {
                return res
                    .status(409)
                    .json({ errorMessage: '존재하는 Email입니다.' });
            } else if (createUserData.errorMessage) {
                return res.status(500).json({
                    errorMessage: createUserData.errorMessage,
                });
            }
            return res.status(201).json({ data: createUserData });
        } catch (err) {
            console.log(err);
        }
    };

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const token = await this.usersService.login(email, password);
            if (token) {
                res.cookie('user', token, {
                    maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
                    httpOnly: true,
                });
                res.status(201).json({
                    message: '로그인 완료',
                    token,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    logout = async (req, res, next) => {
        try {
            res.clearCookie('user').end();
            console.log(res.cookie.user);
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = UsersController;
