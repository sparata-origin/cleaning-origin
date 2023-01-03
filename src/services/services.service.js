const ServicesRepository = require("../repository/services.repository");
const { Services: ServicesModel } = require("../../sequelize/models");

class ServicesService {
  servicesRepository = new ServicesRepository(ServicesModel);

  requestServices = async (userId, address, homeImage) => {
    const createServiceData = await this.servicesRepository.createService({
      userId,
      address,
      homeImage,
    });
    return createServiceData;
  };

  putServices = async (serviceId, customerId, address, homeImage) => {
    const updated = await this.servicesRepository.updateService(serviceId, {
      address,
      homeImage,
      customerId,
    });
    return updated;
  };

  deleteServices = async (serviceId, customerId) => {
    const service = await this.servicesRepository.findServiceById(serviceId);
    if (service.customerId !== customerId) {
      return 0;
    }
    await this.servicesRepository.destroyService(serviceId);
  };

  getServicesList = async () => {
    const services = await this.servicesRepository.findAllService();
    return services;
  };

  getServicesDetail = async (serviceId) => {
    const service = await this.servicesRepository.findServiceById(serviceId);
    return service;
  };
}

module.exports = ServicesService;
