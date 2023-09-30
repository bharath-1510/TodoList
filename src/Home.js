import Tasklist from "./Tasklist";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/tasks");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && <Tasklist tasks={data} title="All Tasks" />}
    </div>
  );
};

export default Home;
