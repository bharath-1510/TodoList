import Tasklist from "./Tasklist";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/tasks");
  const title =
    (data != null ? data.length : 0) === 0 ? "No Task" : "All Tasks";

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && <Tasklist tasks={data} title={title} />}
    </div>
  );
};

export default Home;
