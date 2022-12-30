const UsersRepository = require("../repository/users.repository")

class UsersService {
  uesrsRepository = new UsersRepository();

  customerRegister = (email, nickname, password, phone) => {

  }
}

module.exports = UsersService;