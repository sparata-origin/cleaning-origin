const { Customers , Business } = require("../../sequelize/models");

class UsersRepository {

  customerRegister = async (email, password, nickname, phone) => {
    const createUserData = await Customers.create({
      email,
      password,
      nickname,
      phone,
    });
    return createUserData;
  };

  businessRegister = async (email, password, companyName, phone) => {
    const createUserData = await Business.create({
      email,
      password,
      companyName,
      phone,
    });
    return createUserData;
  };


}

module.exports = UsersRepository;