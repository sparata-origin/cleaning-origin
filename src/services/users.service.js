const UsersRepository = require('../repository/users.repository');
const UsersVerifi = require('../module/users.verifi.module');

class UsersService {
    usersRepository = new UsersRepository();
    usersVerifi = new UsersVerifi();

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

    login = async (email, password, isBusiness) => {
        try {
            return await this.usersRepository.existUser(email);
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = UsersService;
