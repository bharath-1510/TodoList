import { useState } from "react";

const Tasklist = ({ tasks, title }) => {
  const [data, setTasks] = useState(tasks);
  const [Title, setTitle] = useState(title);
  const handleComplete = (id, status) => {
    const updatedData = data.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedData);
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ completed: true }),
    });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((task) => task.id !== id);
    setTasks(updatedData);
    if (updatedData.length == 0) setTitle("No Task");
    else setTitle("All Task");
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div className="t-list">
      <h2>{Title}</h2>
      {data.map((task) => (
        <div className="t-display" key={task.id}>
          <div
            className="task-details"
            onClick={() => handleComplete(task.id, task.completed)}
          >
            <h2>{task.title}</h2>
            <p>
              {task.completed === true ? (
                "Completed"
              ) : (
                <strike>Completed</strike>
              )}
            </p>
          </div>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
