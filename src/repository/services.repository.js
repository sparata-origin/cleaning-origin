class ServicesRepository {
  constructor(ServicesModel) {
    this.servicesModel = ServicesModel;
  }

  findAll = async () => {
    const services = await this.servicesModel.findAll();
    return services;
  };

  findById = async (id) => {
    const service = await this.servicesModel.findByPk(id);
    return service;
  };

  findOne = async (findoption) => {
    const service = await this.servicesModel.findOne(findoption);
    return service;
  }

  create = async (userId, address, homeImage) => {
    const created = await this.servicesModel.create();
    return created;
  };

  update = async (id, updateData) => {
    const updated = await this.servicesModel.update(updateData, {
      where: { id },
    });
    await this.servicesModel.save();
    return updated;
  };

  destroy = async (id) => {
    const destroyed = await this.servicesModel.destroy({
      where: { id },
    });
    return destroyed;
  };
}

module.exports = ServicesRepository;
