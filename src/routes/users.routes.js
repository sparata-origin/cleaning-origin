const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controllers');
const usersController = new UsersController();

// 회원가입
router.post('/auth/signup', usersController.userRegister);

// 로그인 API
router.post('/auth/login', usersController.login);

// 로그아웃 API
router.get('/auth/logout', usersController.logout);

module.exports = router;

// 예시
// router.post("/customer/singup", costomerController.createCostomer);
