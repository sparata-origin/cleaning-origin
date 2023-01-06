const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controllers');
const authMiddleware = require('../middleware/auth.middleware');
const usersController = new UsersController();

// 회원가입
router.post('/auth/signup', usersController.userRegister);

// 로그인 API
router.post('/auth/login', usersController.login);

// 로그아웃 API
router.get('/auth/logout', usersController.logout);

// 내 정보 보기
router.get('/auth/info', authMiddleware, async (req, res) => {
    res.json({ user: res.locals.user });
});

module.exports = router;
