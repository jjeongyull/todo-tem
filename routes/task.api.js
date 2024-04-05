const express = require('express');
const taskController = require('../controller/task.controller');
const router = express.Router();

// insert
router.post('/', taskController.createTask);

//select
router.get('/', taskController.getTask);

//update
router.put('/:id', (req, res) => {
  res.send('update tasks');
});

//delete
router.delete('/:id', (req, res) => {
  res.send('delete tasks');
});

module.exports = router;