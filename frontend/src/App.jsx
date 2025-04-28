import TaskForm from "./frontend/src/components/TaskForm.jsx";
import TaskList from "./frontend/src/components/TaskList.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <TaskForm refreshTasks={() => window.location.reload()} />
      <TaskList />
    </div>
  );
}

export default App;