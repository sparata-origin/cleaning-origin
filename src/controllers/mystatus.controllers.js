const StatusService = require('../services/mystatus.service');


// Users의 컨트롤러(Controller)역할을 하는 클래스
class StatusController {
    statusService = new StatusService();

    

}

module.exports = StatusController;
