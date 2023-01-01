const UsersRepository = require('../repository/users.repository');
const UsersVerify = require('../module/users.verify.module');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config/config');

class UsersService {
    usersRepository = new UsersRepository();
    usersVerify = new UsersVerify();

    userRegister = async (email, password, nickname, phone, isBusiness) => {
        try {
            const existUser = await this.usersRepository.existUser(email);

            if (existUser) {
                return false;
            }

            const createUserData = await this.usersRepository.userRegister(
                email,
                password,
                nickname,
                phone,
                isBusiness
            );

            return createUserData;
        } catch {
            return { errorMessage: '예상하지 못한 문제가 발생했습니다.' };
        }
    };

    login = async (email, password) => {
        try {
            const user = await this.usersRepository.existUser(email);
            const passwordValid = await this.usersVerify.passwordVerify(
                password,
                user.password
            );

            if (user && passwordValid) {
                const payload = {
                    userId: user.id,
                    nickname: user.nickname,
                };
                const token = jwt.sign(
                    payload,
                    jwtConfig.secretKey,
                    jwtConfig.option
                );
                return token;
            } else {
                return { errorMessage: '비밀번호가 일치하지 않습니다' };
            }
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = UsersService;
