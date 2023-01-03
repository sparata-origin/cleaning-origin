const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/services.controllers');
const authMiddleware = require('../middleware/auth.middleware');
const servicesController = new ServicesController();

// 청소 서비스 신청(고객) API
router.post('/services', authMiddleware, servicesController.requestServices);

// 청소 서비스 수정(고객) API
router.put(
    '/services/:serviceId',
    authMiddleware,
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
