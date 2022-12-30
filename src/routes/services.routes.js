const express = require("express");
const router = express.Router();

// 청소 서비스 신청(고객) API
router.post('/services')

// 청소 서비스 수정(고객) API
router.put('/services/:serviceId')

// 청소 서비스 삭제(고객) API
router.delete('/services/:serviceId')

// 청소 서비스 목록 조회(전체) API
router.get('/services/lists')

// 청소 서비스 상세 조회(전체) API
router.get('/services/:serviceId')


module.exports = router;