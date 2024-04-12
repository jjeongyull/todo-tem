const express = require('express');
const router = express.Router();
const taskApi = require('./task.api');
const userAPI = require('./user.api');

router.use('/tasks', taskApi);
router.use('/user', userAPI);

module.exports = router;