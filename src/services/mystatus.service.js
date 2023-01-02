const StatusRepository = require('../repository/mystatus.repository');

class StatusService {
    statusRepository = new StatusRepository();
    
    customerStatus = async (userId) => {
      try{
        const customerStatusData = await this.statusRepository.customerStatus(userId)

        return customerStatusData
      } catch {
        return false
      }
      
    }

}

module.exports = StatusService;