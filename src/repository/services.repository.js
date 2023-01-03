class ServicesRepository {
  constructor(ServicesModel) {
    this.servicesModel = ServicesModel;
  }

  findAllService = async () => {
    const services = await this.servicesModel.findAll();
    return services;
  };

  findServiceById = async (id) => {
    const service = await this.servicesModel.findByPk(id);
    return service;
  };

  findService = async (findoption) => {
    const service = await this.servicesModel.findOne(findoption);
    return service;
  }

  createService = async (userId, address, homeImage) => {
    const created = await this.servicesModel.create({
      address: 'test',
      homeImage: 'test',
      customerId: userId,
    });
    return created;
  };

  updateService = async (id, updateData) => {
    const updated = await this.servicesModel.update(updateData, {
      where: { id },
    });
    await this.servicesModel.save();
    return updated;
  };

  destroyService = async (id) => {
    const destroyed = await this.servicesModel.destroy({
      where: { id },
    });
    return destroyed;
  };
}

module.exports = ServicesRepository;
