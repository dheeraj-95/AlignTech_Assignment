const express = require('express');
const bodyparser = require('body-parser');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.post('/login', authController.login);

module.exports = router;