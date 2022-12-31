const UsersRepository = require("../repository/users.repository")

class UsersService {
  uesrsRepository = new UsersRepository();

  customerRegister = async (email, password, nickname, phone) => {
    const createCostomerData = await this.uesrsRepository.customerRegister(email, password, nickname, phone)

    return createCostomerData
  }

  businessRegister = async (email, password, companyName, phone) => {
    const createBusinessData = await this.uesrsRepository.businessRegister(email, password, companyName, phone)

    return createBusinessData
  }
}

module.exports = UsersService;