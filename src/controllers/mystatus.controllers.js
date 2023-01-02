const StatusService = require('../services/mystatus.service');

class StatusController {
    statusService = new StatusService();

    customerStatus = async (req,res,next) => {
      const userId = 1

      try {
        const customerStatusData = await this.statusService.customerStatus(userId)
        if (!customerStatusData) {
          res.status(500).json({errorMessage : "예상하지 못한 문제가 발생했습니다."})
        }
        return res.json({customerStatusData})
      } catch {
        return res.status(500).json({errorMessage : "예상하지 못한 문제가 발생했습니다."})
      }
      
    }

    serviceStatusUpdate = async (req, res) => {
      const serviceId = req.params;
      
      const seviceStatus = req.body;
    }
}

module.exports = StatusController;
