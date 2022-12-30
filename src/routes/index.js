const express = require('express');
const router = express.Router();
const usersRouter = require('./users.routes');
const servicesRouter = require('./services.routes');
const statusRouter = require('./mystatus.routes');
const reviewsRouter = require('./reviews.routes');

router.use("/", [usersRouter, servicesRouter, statusRouter, reviewsRouter])

module.exports = router;