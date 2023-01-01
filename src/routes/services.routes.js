const express = require("express");
const router = express.Router();
const ServicesController = require('../controllers/services.controllers');
const authMiddleware = require('../middleware/auth.middleware');

// 청소 서비스 신청(고객) API
router.post('/services', authMiddleware, ServicesController.requestServices)

// 청소 서비스 수정(고객) API
router.put('/services/:serviceId', authMiddleware, ServicesController.putServices)

// 청소 서비스 삭제(고객) API
router.delete('/services/:serviceId', authMiddleware, ServicesController.deleteServices)

// 청소 서비스 목록 조회(전체) API
router.get('/services/lists', ServicesController.getServicesList)

// 청소 서비스 상세 조회(전체) API
router.get('/services/:serviceId', ServicesController.getServicesDetail)


module.exports = router;