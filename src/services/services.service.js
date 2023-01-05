const ServicesRepository = require('../repository/services.repository');
const { Services: ServicesModel } = require('../../sequelize/models');
const StatusRepository = require('../repository/mystatus.repository');

class ServicesService {
    servicesRepository = new ServicesRepository(ServicesModel);
    statusRepository = new StatusRepository();

    requestServices = async (customerId, address, homeImage) => {
        const pointCheck = await this.statusRepository.userPoint(customerId);
        if (pointCheck.point <= 199999) {
            return { errorMessage: '포인트가 부족합니다.' };
        }
        pointCheck.point -= 200000;
        await this.statusRepository.PointTradingUpdate(pointCheck);
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
        const pointCheck = await this.statusRepository.userPoint(customerId);
        pointCheck.point += 200000;
        await this.statusRepository.PointTradingUpdate(pointCheck);
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
