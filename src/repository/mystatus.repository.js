const { Users, Services } = require("../../sequelize/models");

class StatusRepository {

  customerStatus = async (userId) => {
    const customerStatusData = await Services.findAll({
      where: { customerId: userId,},
      attributes : ['id','address','homeImage','customerId','createdAt','status']
    });
    return customerStatusData
  };

  existStatus = async (serviceId) => {
    const existStatusData = await Services.findOne({
      where : { id : serviceId },
      attribures : ['id','status','customerId','businessId']
    })
    return existStatusData
  }

  existStatusUpdate = async (existStatus) => {
   const existStatusData =  await existStatus.save();

   return existStatusData
  }
}

module.exports = StatusRepository;
