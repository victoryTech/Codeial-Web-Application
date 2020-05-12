const express = require('express');

const router = express.Router();


const userControllers = require('../controllers/users_controller');

router.get('/profile', userControllers.profile);

module.exports = router;
