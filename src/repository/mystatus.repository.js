const { Users, Services } = require("../../sequelize/models");

class StatusRepository {

  customerStatus = async (userId) => {
    const customerStatusData = await Services.findAll({
      where: { customerId: userId,},
      // attributes : ['id','address','homeImage','customerId','createdAt','status']
    });
    return customerStatusData
  };

  buisnessStatus = async (userId) => {
    const buisnessStatusData = await Services.findAll({
      where : { businessId : userId }
    })
    return buisnessStatusData
  }

  existStatus = async (serviceId) => {
    const existStatusData = await Services.findOne({
      where : { id : serviceId },
      // attributes : ['id','status','customerId','businessId']
    })
    return existStatusData
  }

  existStatusUpdate = async (existStatus) => {
   const existStatusData =  await existStatus.save();

   return existStatusData
  }
  existService = async (businessId) => {
    const existService = await Services.findAll({
      where : { businessId : businessId },
      attributes : ['status']
    })
    return existService
  }
  userPoint = async (id) => {
    const userPoint = await Users.findOne({ 
      where : {id : id},
      attributes : ['id','point']
    })

    return userPoint
  }

  PointTradingUpdate = async (user) => {
    const userPointUpdate = user.save();

    return userPointUpdate
  }
}

module.exports = StatusRepository;
