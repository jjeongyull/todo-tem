const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router();

// insert
router.post('/', taskController.createTask);

//select
router.get('/', taskController.getTask);

//update
router.put('/:id', taskController.updateTask);

//delete
router.delete('/:id', taskController.deleteTask);

module.exports = router;