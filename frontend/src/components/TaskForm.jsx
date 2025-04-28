import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert("Title and Due Date are required!");
      return;
    }
    await createTask({ title, description, due_date: dueDate, status: "pending" });
    setTitle("");
    setDescription("");
    setDueDate("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
