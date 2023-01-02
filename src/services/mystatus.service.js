const StatusRepository = require('../repository/mystatus.repository');

class StatusService {
    statusRepository = new StatusRepository();
    

}

module.exports = StatusService;