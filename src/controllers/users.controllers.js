const UsersService = require("../services/users.service");
const UsersVerifi = require("../module/users.verifi.module");

// Users의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  usersService = new UsersService();
  usersVerifi = new UsersVerifi();

  customerRegister = async (req, res, next) => {
    const { email, nickname, confirm, phone } = req.body;
    let { password } = req.body;

    const passwordCheck = await this.usersVerifi.checkPassword(
      password,
      confirm
    );

    if (passwordCheck === false) {
      return res.status(412).json({ errorMessage: "Password를 확인해주세요." });
    }

    const emailCheck = await this.usersVerifi.checkEmail(email);

    if (emailCheck === false) {
      return res.status(412).json({ errorMessage: "email 형식이 올바르지 않습니다." });
    }

    password = await this.usersVerifi.passwordEncryption(password);

    const createCostomerData = await this.usersService.customerRegister(
      email,
      password,
      nickname,
      phone
    );

    if (!createCostomerData) {
      return res.status(409).json({ errorMessage : "존재하는 Email입니다." })
    } else if (createCostomerData.errorMessage) {
      res.status(500).json({ errorMessage : createCostomerData.errorMessage })
    }
    return res.status(201).json({ data: createCostomerData }); 
  };

  businessRegister = async (req, res, next) => {
    const { email, nickname: companyName, confirm, phone } = req.body;
    let { password } = req.body;

    const passwordCheck = await this.usersVerifi.checkPassword(
      password,
      confirm
    );
    if (passwordCheck === false) {
      return res.status(412).json({ errorMessage: "Password를 확인해주세요." });
    }

    const emailCheck = await this.usersVerifi.checkEmail(email);
    if (emailCheck === false) {
      return res.status(412).json({ errorMessage: "email 형식이 올바르지 않습니다." });
    }

    password = await this.usersVerifi.passwordEncryption(password);

    const createBusinessData = await this.usersService.businessRegister(
      email,
      password,
      companyName,
      phone
    );

    if (!createBusinessData) {
      return res.status(409).json({ errorMessage : "존재하는 Email입니다." })
    } else if (createBusinessData.errorMessage) {
      res.status(500).json({ errorMessage : createBusinessData.errorMessage })
    }
    return res.status(201).json({ data: createBusinessData }); 
  };
}

module.exports = UsersController;
