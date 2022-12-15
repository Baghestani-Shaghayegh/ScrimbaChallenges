import Navbar from "./components/Navbar";
import data from "./data";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="card-section">{cards}</section>
    </div>
  );
}

export default App;
