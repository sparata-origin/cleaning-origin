const ServicesService = require('../services/services.service');

class ServicesController {
    servicesService = new ServicesService();

    requestServices = async (req, res, next) => {
        try {
            const { address } = req.body;
            const homeImage = req.file.filename;
            const customerId = res.locals.user.id;
            const isBusiness = res.locals.user.isBusiness;
            if (isBusiness) {
                return res.status(403).json({
                    errorMessage: '고객만이 가능한 요청입니다.',
                });
            }
            if (!homeImage) {
                return res.status(412).json({
                    errorMessage: '사진울 등록해주세요',
                });
            }
            const lastDot = homeImage.lastIndexOf('.');
            const ext = homeImage.substring(lastDot, homeImage.length);
            if (!ext.match(/\.(jpg|jpeg|png|gif)$/)) {
                return res.status(412).json({
                    errorMessage: '이미지 파일만 가능합니다',
                });
            }
            if (!address) {
                return res.status(412).json({
                    errorMessage: '주소를 입력해주세요',
                });
            }
            const requestServiceData =
                await this.servicesService.requestServices(
                    customerId,
                    address,
                    homeImage
                );
            if (requestServiceData.errorMessage) {
                return res.status(412).json({
                    errorMessage: requestServiceData.errorMessage,
                });
            }
            return res.status(201).json({
                message: '청소 신청이 완료되었습니다.',
            });
        } catch (error) {
            return res.status(500).json({
                errorMessage: error.errorMessage,
            });
        }
    };

    putServices = async (req, res, next) => {
        try {
            const { serviceId } = req.params;
            const { address } = req.body;
            const homeImage = req.file.filename;
            const customerId = res.locals.user.id;
            const isBusiness = res.locals.user.isBusiness;
            if (isBusiness) {
                return res.status(403).json({
                    errorMessage: '고객만이 가능한 요청입니다.',
                });
            }
            if (!address) {
                return res.status(412).json({
                    errorMessage: '주소를 입력해주세요',
                });
            }
            if (!homeImage) {
                return res.status(412).json({
                    errorMessage: '사진울 등록해주세요',
                });
            }
            const putServiceData = await this.servicesService.putServices(
                serviceId,
                customerId,
                address,
                homeImage
            );
            if (putServiceData.errorMessage) {
                return res
                    .status(400)
                    .json({ errorMessage: putServiceData.errorMessage });
            }
            return res.status(200).json({
                message: '수정이 완료되었습니다.',
            });
        } catch (error) {
            return res.status(500).json({
                errorMessage: error.message,
            });
        }
    };

    deleteServices = async (req, res, next) => {
        try {
            const { serviceId } = req.params;
            const customerId = res.locals.user.id;
            const isBusiness = res.locals.user.isBusiness;
            if (isBusiness) {
                return res.status(403).json({
                    errorMessage: '고객만이 가능한 요청입니다.',
                });
            }
            const deleteServiceData = await this.servicesService.deleteServices(
                serviceId,
                customerId
            );
            if (deleteServiceData.errorMessage) {
                return res
                    .status(400)
                    .json({ errorMessage: deleteServiceData.errorMessage });
            }
            return res.status(200).json({
                message: '삭제가 완료되었습니다.',
            });
        } catch (error) {
            return res.status(500).json({
                errorMessage: error.message,
            });
        }
    };

    getServicesList = async (req, res, next) => {
        try {
            const serviceList = await this.servicesService.getServicesList();
            res.status(200).json({ data: serviceList });
        } catch (error) {
            res.status(500).json({
                errorMessage: error.message,
            });
        }
    };

    getServicesDetail = async (req, res, next) => {
        try {
            const { serviceId } = req.params;
            const serviceDetail = await this.servicesService.getServicesDetail(
                serviceId
            );
            if (!serviceDetail) {
                return res.status(404).json({
                    errorMessage: '해당하는 서비스가 없습니다.',
                });
            }
            return res.status(200).json({ data: serviceDetail });
        } catch (error) {
            return res.status(500).json({
                errorMessage: error.message,
            });
        }
    };
}

module.exports = ServicesController;
