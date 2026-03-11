import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "./api";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    getTasks().then((res) => setTasks(res.data));
  };

 const handleAdd = () => {
  addTask({
    title: title,
    description: "Task from React"
  }).then(() => {
    setTitle("");
    loadTasks();
  });
};

  const handleDelete = (id) => {
    deleteTask(id).then(() => loadTasks());
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="text-center mb-4">Task Manager</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>

        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between"
            >
              {task.title}

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;