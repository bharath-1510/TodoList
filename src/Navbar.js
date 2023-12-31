import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TODOLIST</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
