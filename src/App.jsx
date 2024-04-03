import Navbar from "./components/navbar";
import './sass/main.scss';
const app = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="container  mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>col 1</div>
          <div>col 1</div>
          <div>col 1</div>
          <div>col 1</div>
        </section>
      </section>
    </div>
  );
};

export default app;
