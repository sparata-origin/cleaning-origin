const ServicesRepository = require("../");
const { Services: ServicesModel } = require("../../sequelize/models");

class ServicesService {
  servicesRepository = new ServicesRepository(ServicesModel);

  requestServices = async (userId, address, homeImage) => {
    const createServiceData = await this.servicesRepository.create({
      userId,
      address,
      homeImage,
    });
    return createServiceData;
  };

  putServices = async (serviceId, customerId, address, homeImage) => {
    const updated = await this.servicesRepository.update(serviceId, {
      address,
      homeImage,
      customerId,
    });
    return updated;
  };

  deleteServices = async (serviceId, customerId) => {
    const service = await this.servicesRepository.findById(serviceId);
    if (service.customerId !== customerId) {
      return 0;
    }
    await this.servicesRepository.destroy(serviceId);
  };

  getServicesList = async () => {
    const services = await this.servicesRepository.findAll();
    return services;
  };

  getServicesDetail = async (serviceId) => {
    const service = await this.servicesRepository.findById(serviceId);
    return service;
  };
}

module.exports = ServicesService;
