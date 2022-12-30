const express = require("express");
const router = express.Router();

// 업체 리뷰 조회 API 
router.get('/business/reviews/:businessId')

// 업체 리뷰 작성 API
router.post('/business/reviews/:businessId')

// 모든 업체 평점 조회 API
router.get('/business/stars')


module.exports = router;