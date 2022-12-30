const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controllers");
const usersController = new UsersController();

// 고객 회원가입 API
router.post("/customer/signup", usersController.customerRegister);

// 업체 회원가입 API
router.post("/business/singup");

// 로그인 API
router.post("/auth");

// 로그아웃 API
router.post("/logout")


module.exports = router;

// 예시
// router.post("/customer/singup", costomerController.createCostomer); 