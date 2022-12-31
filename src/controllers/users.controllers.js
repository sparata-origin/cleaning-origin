const UsersService = require("../services/users.service");


// Users의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  usersService = new UsersService();

  customerRegister = async (req, res, next) => {
    const { email, nickname, confirm, phone } = req.body;
    let { password } =req.body;
    if (password !== confirm) {
      return res.status(412).json({ errorMessage: "Password를 확인해주세요." });
    }

    password = await this.usersService.passwordEncryption(password)

    const createCostomerData = await this.usersService.customerRegister(
      email,
      password,
      nickname,
      phone
    );
    return res.status(201).json({ data: createCostomerData });
  };

  businessRegister = async (req, res, next) => {
    const { email, nickname: companyName, confirm, phone } = req.body;
    let { password } =req.body;
    if (password !== confirm) {
      return res.status(412).json({ errorMessage: "Password를 확인해주세요." });
    }

    password = await this.usersService.passwordEncryption(password)

    const createBusinessData = await this.usersService.businessRegister(
      email,
      password,
      companyName,
      phone
    );
    return res.status(201).json({ data: createBusinessData });
  };
}

module.exports = UsersController;
