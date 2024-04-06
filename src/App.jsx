import Navbar from "./components/navbar";
import Card from "./components/card";
import List from "./components/list";
import "./sass/main.scss";
const app = () => {
  const items = [
    {
      id: 1,
      name: "Peter",
    },
    {
      id: 2,
      name: "Ramy",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="card">
        <section className="md:container md:mx-auto lg:container lg:mx-auto xl:container 2xl:mx-auto 2xl:container xl:mx-auto text-center  px-20 mt-5">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center items-center">
            <Card name="Card 1"></Card>
            <Card name="Card 2"></Card>
            <Card name="Card 3"></Card>
            <Card name="Card 3"></Card>
          </section>
        </section>
      </div>

      <List items={items} />
    </div>
  );
};

export default app;
