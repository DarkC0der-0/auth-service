const express = require('express');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/me', authMiddleware, roleMiddleware(['user', 'admin']), UserController.getUser);

module.exports = router;

