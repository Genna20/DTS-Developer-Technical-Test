const db = require('../db');

//Create Task
exports.createTask = (req, res) => {
  const { title, description, status, dueDate } = req.body;
  if (!title || !dueDate) {
    return res.status(400).json({ error: "Title and due date are required"});
  }  
  const query = `INSERT INTO tasks (title, description, status, dueDate) VALUES (?, ?, ?, ?)`;
  db.run(query, [title, description, status || 'pending', dueDate], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID});
  })
};

//Get All Tasks
exports.getAllTasks = (req, res) => {
  db.all(`SELECT * FROM tasks`, [], (err, rows) => {
    if  (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

//Get Task by ID
exports.getTaskById = (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM tasks WHERE id = ?`, [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Task not found" });
    res.json(row);
  });
};

//Update Task Status
exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: "Status is required" });

  db.run(`UPDATE tasks SET status = ? WHERE id = ?`, [status, id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task updated" });
  });
};

//Delete Task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM tasks WHERE id = ?`, [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  });
};