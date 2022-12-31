const UsersRepository = require("../repository/users.repository");
const UsersVerifi = require("../module/users.verifi.module");

class UsersService {
  usersRepository = new UsersRepository();
  usersVerifi = new UsersVerifi();

  customerRegister = async (email, password, nickname, phone) => {
    try {
      const existCustomerUser = await this.usersRepository.existCustomerUser(
        email
      );

      if (existCustomerUser) {
        return false;
      }

      const createCostomerData = await this.usersRepository.customerRegister(
        email,
        password,
        nickname,
        phone
      );

      return createCostomerData;
    } catch {
      return { errorMessage: "예상하지 못한 문제가 발생했습니다." };
    }
  };

  businessRegister = async (email, password, companyName, phone) => {
    try {
      const existBusinessUser = await this.usersRepository.existBusinessUser(
        email
      );

      if (existBusinessUser) {
        return false;
      }
      const createBusinessData = await this.usersRepository.businessRegister(
        email,
        password,
        companyName,
        phone
      );
      return createBusinessData;
    } catch {
      return { errorMessage: "예상하지 못한 문제가 발생했습니다." };
    }
  };
}

module.exports = UsersService;
