const StatusRepository = require('../repository/mystatus.repository');

class StatusService {
    statusRepository = new StatusRepository();
    
    myStatus = async (userId, isBusiness) => {
      try{
        if (isBusiness) {
          const myStatusData = await this.statusRepository.buisnessStatus(userId)

          return myStatusData
        }

        const myStatusData = await this.statusRepository.customerStatus(userId)

        return myStatusData
      } catch {
        return false
      }
    }
    receiveOrder = async (serviceId,businessId,isBusiness) => {
      try {
        const existService = await this.statusRepository.existService(businessId)
        const existServiceList = await existService.filter((data)=> data.status === "청소중")
        if (existServiceList.length >= 1) {
          return { errorMessage : "한 번에 한 개의 의뢰만 진행할 수 있습니다."}
        }

        if (!isBusiness) {
          return { errorMessage : "업체만 이용 가능합니다." }
        }
        const existStatus = await this.statusRepository.existStatus(serviceId)
        if (existStatus.status === "청소중") {
          if (existStatus.businessId !== businessId) {
            return { errorMessage : "다른 업체에서 진행중입니다." }
          }
        }
        if (existStatus.status === "대기중") {
          existStatus.status = "청소중"
          existStatus.businessId = businessId
          await this.statusRepository.existStatusUpdate(existStatus)
          return { message : "청소 대행을 수락하였습니다."}
        }

      } catch (err){
        return { errorMessage : "예상하지 못한 오류가 발생했습니다."}
      }
      
    }

    existStatus = async (serviceId,businessId) => {

      try {
        const existStatus = await this.statusRepository.existStatus(serviceId)
        
        await this.pointTrading(businessId)
        
        if (existStatus.status === "청소중") {
          if (existStatus.businessId !== businessId) {
            return { errorMessage : "다른 업체에서 진행중입니다." }
          }
          existStatus.status = "청소완료"
          await this.statusRepository.existStatusUpdate(existStatus)
          return { message : "청소를 완료하였습니다." }
        }

        return { message : "리뷰를 기다리세요" }
      } catch (err){
        console.log(err)
        return { errorMessage : "예상하지 못한 오류가 발생했습니다."}
      }
      
    }

    pointTrading = async (businessId) => {
      const businessPoint = await this.statusRepository.userPoint(businessId)
         
      businessPoint.point += 200000;

      await this.statusRepository.PointTradingUpdate(businessPoint);
      return true
    }

}

module.exports = StatusService;