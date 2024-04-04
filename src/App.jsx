import Navbar from "./components/navbar";
import Card from "./components/card";
import './sass/main.scss';
const app = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="container  mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card name="Card 1"></Card>
          <Card name="Card 2"></Card>
          <Card name="Card 3"></Card>
        </section>
      </section>
    </div>
  );
};

export default app;
