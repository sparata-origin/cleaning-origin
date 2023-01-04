const StatusService = require('../services/mystatus.service');

class StatusController {
    statusService = new StatusService();

    myStatus = async (req,res) => {
      const userId = res.locals.user.id
      const isBusiness = res.locals.user.isBusiness

      try {
        const myStatusData = await this.statusService.myStatus(userId, isBusiness)
        if (!myStatusData) {
          res.status(500).json({errorMessage : "예상하지 못한 문제가 발생했습니다."})
        }
        return res.json({myStatusData})
      } catch {
        return res.status(500).json({errorMessage : "예상하지 못한 문제가 발생했습니다."})
      }
    }

    serviceStatusUpdate = async (req, res) => {
      const { serviceId } = req.params;
      const businessId = res.locals.user.id

      const existStatus = await this.statusService.existStatus(serviceId, businessId)
      if (existStatus.errorMessage) {
        return res.status(existStatus.code ? existStatus.code : 409).json({ errorMessage : existStatus.errorMessage })
      }
      if (existStatus.message) {
        return res.json({message : existStatus.message})
      }
    }

    receiveOrder = async (req, res) => {
      const { serviceId } = req.params;
      const businessId = res.locals.user.id
      const isBusiness = res.locals.user.isBusiness

      const existStatus = await this.statusService.receiveOrder(serviceId, businessId,isBusiness)
      if (existStatus.errorMessage) {
        return res.status(existStatus.code ? existStatus.code : 409).json({ errorMessage : existStatus.errorMessage })
      }
      if (existStatus.message) {
        return res.json({message : existStatus.message})
      }
    }


}

module.exports = StatusController;
