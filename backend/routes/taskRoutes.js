const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//Create a task
router.post('/', taskController.createTask);

//Get all tasks
router.get('/', taskController.getAllTasks);

//Get task by ID
router.get('/:id', taskController.getTaskById);

//Update task Status
router.patch('/:id', taskController.updateTaskStatus);

//Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;