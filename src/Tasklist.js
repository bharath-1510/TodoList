const Tasklist = ({ tasks, title }) => {
  return (
    <div className="t-list">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <div className="t-display" key={task.id}>
          <h2>{task.title}</h2>
          <p>Completed {task.completed === true ? " Done" : " Not Done"} </p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
