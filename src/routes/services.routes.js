const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const ServicesController = require('../controllers/services.controllers');
const servicesController = new ServicesController();
const authMiddleware = require('../middleware/auth.middleware');

try {
    fs.readdirSync('./views/uploads'); // 폴더 확인
} catch (err) {
    console.error('uploads 폴더가 없습니다. 폴더를 생성합니다.');
    fs.mkdirSync('./views/uploads'); // 폴더 생성
}

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './views/uploads'); // 파일 저장 경로
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 중복되지 않도록
    },
});
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('이미지 파일만 허용됩니다'));
    }
    cb(null, true);
};
const uploadFile = multer({ storage: fileStorage, fileFilter: fileFilter });

// 청소 서비스 신청(고객) API
router.post(
    '/services',
    authMiddleware,
    uploadFile.single('homeImage'),
    servicesController.requestServices
);

// 청소 서비스 수정(고객) API
router.put(
    '/services/:serviceId',
    authMiddleware,
    uploadFile.single('homeImage'),
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
