import image from "./images/logo.png"
import './App.css'; 
import TaskList from "./compounents/taskLists.js";

function App() {
  return (
    <div className="task-manager">
      <div className = "logo-container">
        <img 
        src= {image}
        className ="logo" />
      </div>
      <div className ="principal-task-list">
        <h1>My tasks</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
