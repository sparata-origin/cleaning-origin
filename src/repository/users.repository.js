const { Users } = require('../../sequelize/models');

class UsersRepository {
    userRegister = async (email, password, nickname, phone, isBusiness) => {
        if (isBusiness) {
            const createUserData = await Users.create({
                email,
                password,
                nickname,
                phone,
                point: 0,
                isBusiness,
            });
            return createUserData;
        } else {
            const createUserData = await Users.create({
                email,
                password,
                nickname,
                phone,
                point: 500,
                isBusiness,
            });
            return createUserData;
        }
    };

    existUser = async (email) => {
        const existUser = await Users.findOne({ where: { email } });

        return existUser;
    };
}

module.exports = UsersRepository;
