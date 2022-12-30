const UsersService = require("../services/users.service");

// Users의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  usersService = new UsersService();

  customerRegister = async (req, res, next) => {
    const { email, ncikname, password, confirm, phone } = req.body;
    if (password !== confirm) {
      return res.status(412).json({ errorMessage : "Password를 확인해주세요." })
    }
    const createCostomerData = await this.usersService.customerRegister(
     email,
     ncikname,
     password,
     phone, 
    );
    return res.status(201).json({ data: createCostomerData });  
  };
}

module.exports = UsersController;