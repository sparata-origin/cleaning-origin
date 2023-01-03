const ServicesService = require("../services/services.service");

class ServicesController {
  servicesService = new ServicesService();

  requestServices = async (req, res, next) => {
    try {
      const { address, homeImage } = req.body;
      const { id: userId, nickName, isBusiness } = res.locals.user;
      if (isBusiness) {
        return res.status(403).json({
          errorMessage: "고객만이 가능한 요청입니다.",
        });
      }
      await this.servicesService.requestServices(userId, address, homeImage);
      return res.status(201).json({
        message: "청소 신청이 완료되었습니다.",
      });
    } catch (error) {
      return res.status(400).json({
        errorMessage: "서비스 신청에 실패하였습니다.",
      });
    }
  };

  putServices = async (req, res, next) => {
    try {
      const serviceId = +req.params.serviceId;
      const { address, homeImage } = req.body;
      const { id: userId, nickName, isBusiness } = res.locals.user;
      if (isBusiness) {
        return res.status(403).json({
          errorMessage: "고객만이 가능한 요청입니다.",
        });
      }
      await this.servicesService.putServices(
        serviceId,
        userId,
        address,
        homeImage
      );
      return res.status(200).json({
        message: "수정이 완료되었습니다.",
      });
    } catch (error) {
      return res.status(400).json({
        errorMessage: "수정에 실패하였습니다.",
      });
    }
  };

  deleteServices = async (req, res, next) => {
    try {
      const serviceId = +req.params.serviceId;
      const { id: userId, nickName, isBusiness } = res.locals.user;
      if (isBusiness) {
        return res.status(403).json({
          errorMessage: "고객만이 가능한 요청입니다.",
        });
      }
      await this.servicesService.deleteServices(serviceId, userId);
      return res.status(200).json({
        message: "삭제가 완료되었습니다.",
      });
    } catch (error) {
      return res.status(400).json({
        errorMessage: "삭제에 실패하였습니다.",
      });
    }
  };

  getServicesList = async (req, res, next) => {
    try {
      const data = await this.servicesService.getServicesList();
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({
        errorMessage: "서비스 목록 조회에 실패하였습니다.",
      });
    }
  };

  getServicesDetail = async (req, res, next) => {
    try {
      const serviceId = +req.params.serviceId;
      const data = await this.servicesService.getServicesDetail(serviceId);
      if (!data) {
        return res.status(404).json({
          errorMessage: '해당하는 서비스가 없습니다.'
        })
      }
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({
        errorMessage: "서비스 상세 조회에 실패하였습니다.",
      });
    }
  };
}

module.exports = ServicesController;
