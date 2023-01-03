const ServicesRepository = require('../repository/services.repository');
const { Services: ServicesModel } = require('../../sequelize/models');

class ServicesService {
    servicesRepository = new ServicesRepository(ServicesModel);

    requestServices = async (customerId, address, homeImage) => {
        const createServiceData = await this.servicesRepository.createService(
            customerId,
            address,
            homeImage
        );
        return createServiceData;
    };

    putServices = async (serviceId, customerId, address, homeImage) => {
        try {
            const existService = await this.servicesRepository.findServiceById(
                serviceId
            );
            if (!existService) {
                return { errorMessage: '해당하는 서비스가 존재하지 않습니다' };
            }
            if (parseInt(customerId) !== existService.customerId) {
                return { errorMessage: '작성자만 수정할 수 있습니다' };
            }
            const updated = await this.servicesRepository.updateService(
                serviceId,
                address,
                homeImage
            );
            return updated;
        } catch (error) {
            console.log(error);
        }
    };

    deleteServices = async (serviceId, customerId) => {
        const existService = await this.servicesRepository.findServiceById(
            serviceId
        );
        if (!existService) {
            return { errorMessage: '해당하는 서비스가 존재하지 않습니다' };
        }
        if (parseInt(customerId) !== existService.customerId) {
            return { errorMessage: '작성자만 삭제할 수 있습니다' };
        }
        return await this.servicesRepository.destroyService(serviceId);
    };

    getServicesList = async () => {
        const services = await this.servicesRepository.findAllService();
        return services;
    };

    getServicesDetail = async (serviceId) => {
        const service = await this.servicesRepository.findServiceById(
            serviceId
        );
        return service;
    };
}

module.exports = ServicesService;
