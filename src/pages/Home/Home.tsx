import ToDoList from "./ToDoList";
import PartTitle from "../components/PartTitle/PartTitle";
const Home = () => {
  return (
    <>
      <main className="container">
        <div className="part">
          <PartTitle title="loading" />
          <ToDoList />
        </div>
      </main>
    </>
  );
};

export default Home;
