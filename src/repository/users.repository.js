const { Users } = require("../../sequelize/models");

class UsersRepository {
  userRegister = async (email, password, nickname, phone, point, isBusiness) => {
    const createUserData = await Users.create({
      email,
      password,
      nickname,
      phone,
      point,
      isBusiness,
    });
    return createUserData;
  };

  existUser = async (email) => {
    const existUser = await Users.findOne({ where: { email } });

    return existUser;
  };
}

module.exports = UsersRepository;
