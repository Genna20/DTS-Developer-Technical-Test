import { useState, useEffect } from "react";
import { getTasks, updateTaskStatus, deleteTask } from "../services/taskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateTaskStatus(id, status);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              <strong>{task.title}</strong> — {task.status} — due {new Date(task.due_date).toLocaleString()}
              <div>
                <button onClick={() => handleStatusChange(task.id, "completed")} style={{ marginRight: "5px" }}>
                  Mark Completed
                </button>
                <button onClick={() => handleStatusChange(task.id, "pending")} style={{ marginRight: "5px" }}>
                  Mark Pending
                </button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;