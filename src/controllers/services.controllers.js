const ServicesService = require("../services/services.service");

class ServicesController {
  servicesService = new ServicesService();

  requestServices = async (req, res, next) => {
    await this.servicesService.requestServices();
  };

  putServices = async (req, res, next) => {
    await this.servicesService.putServices();
  };

  deleteServices = async (req, res, next) => {
    await this.servicesService.deleteServices();
  };

  getServicesList = async (req, res, next) => {
    await this.servicesService.getServicesList();
  };

  getServicesDetail = async (req, res, next) => {
    await this.servicesService.getServicesDetail();
  };
}

module.exports = ServicesController;
