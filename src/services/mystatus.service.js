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

    existStatus = async (serviceId,businessId,isBusiness) => {

      try {
        const existStatus = await this.statusRepository.existStatus(serviceId)

        if (!isBusiness) {
          return { errorMessage : "업체만 이용 가능합니다." }
        }
  
        if (existStatus.status === "대기중") {
          existStatus.status = "청소중"
          existStatus.businessId = businessId
          await this.statusRepository.existStatusUpdate(existStatus)
          return { message : "청소 대행을 수락하였습니다."}
        }
        if (existStatus.status === "청소중") {
          if (existStatus.businessId !== businessId) {
            return { errorMessage : "다른 업체에서 진행중입니다." }
          }
          existStatus.status = "청소완료"
          await this.statusRepository.existStatusUpdate(existStatus)
          return { message : "청소를 완료하였습니다." }
        }

        return { message : "리뷰를 기다리세요" }
      } catch {
        return { errorMessage : "예상하지 못한 오류가 발생했습니다."}
      }
      
    }

}

module.exports = StatusService;