const express = require("express");
const router = express.Router();

const StatusController = require('../controllers/mystatus.controllers');
const statusController = new StatusController();
const authMiddleware = require('../middleware/auth.middleware');

// 나의 청소 서비스 신청 목록 조회(고객) API
router.get('/customers/services', authMiddleware, statusController.customerStatus)

// 나의 청소 진행 현황 업데이트(업체) API
router.put('/business/services/:serviceId', authMiddleware, statusController.serviceStatusUpdate)

// 청소 서비스 진행 목록 조회(업체) API
router.get('/business/sevices')


module.exports = router;