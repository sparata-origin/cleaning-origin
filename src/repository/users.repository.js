const { Customer } = require("../models");

class UsersRepository {
  customerRegister = async (email, password, nickname, phone) => {
    const createUserData = await Customer.create({
      email,
      password,
      nickname,
      phone,
    });

    return createUserData;
  };
}

module.exports = UsersRepository;