const { Services } = require('../../sequelize/models');
class ServicesRepository {
    constructor(ServicesModel) {
        this.servicesModel = ServicesModel;
    }

    findAllService = async () => {
        const services = await this.servicesModel.findAll({
            where : { status : "대기중"}
        });
        return services;
    };

    findServiceById = async (serviceId) => {
        const service = await this.servicesModel.findByPk(serviceId);
        return service;
    };

    findService = async (findoption) => {
        const service = await this.servicesModel.findOne(findoption);
        return service;
    };

    createService = async (userId, address, homeImage) => {
        const created = await this.servicesModel.create({
            customerId: userId,
            address,
            homeImage,
        });
        return created;
    };

    updateService = async (serviceId, address, homeImage) => {
        const updated = await this.servicesModel.update(
            // const updated = await Services.update(
            {
                serviceId,
                address,
                homeImage,
            },
            {
                where: { id: serviceId },
            }
        );
        // await this.servicesModel.save();
        return updated;
    };

    destroyService = async (serviceId) => {
        const destroyed = await this.servicesModel.destroy({
            where: { id: serviceId },
        });
        return destroyed;
    };
}

module.exports = ServicesRepository;
