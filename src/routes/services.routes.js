const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/services.controllers');
const servicesController = new ServicesController();
const multerUpload = require('../middleware/multer');
const authMiddleware = require('../middleware/auth.middleware');

// 청소 서비스 신청(고객) API
router.post(
    '/services',
    authMiddleware,
    multerUpload,
    servicesController.requestServices
);

// 청소 서비스 수정(고객) API
router.put(
    '/services/:serviceId',
    authMiddleware,
    multerUpload,
    servicesController.putServices
);

// 청소 서비스 삭제(고객) API
router.delete(
    '/services/:serviceId',
    authMiddleware,
    servicesController.deleteServices
);

// 청소 서비스 목록 조회(전체) API
router.get('/services/lists', servicesController.getServicesList);

// 청소 서비스 상세 조회(전체) API
router.get('/services/:serviceId', servicesController.getServicesDetail);

module.exports = router;
