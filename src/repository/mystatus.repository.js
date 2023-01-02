const { Users, Services } = require("../../sequelize/models");

class StatusRepository {
  customerStatus = async (userId) => {
    const customerStatusData = await Services.findAll({
      where: { customerId: userId,},
      attributes : ['id','address','homeImage','customerId','createdAt','status']
    });
    return customerStatusData
  };
}

module.exports = StatusRepository;
