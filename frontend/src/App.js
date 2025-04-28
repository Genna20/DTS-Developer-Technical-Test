import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

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