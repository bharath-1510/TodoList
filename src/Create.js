import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const completed = false;
  const [IsPending, SetIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    SetIsPending(true);
    const task = { title, completed };
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      SetIsPending(false);
    });
  };
  return (
    <div className="create">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {!IsPending && <button>Add Task</button>}
        {IsPending && <button disabled>Adding</button>}
      </form>
    </div>
  );
};

export default Create;
