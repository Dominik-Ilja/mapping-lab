import "./App.css";
import data from "./data/contact.json";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container data={data} />
    </div>
  );
}

export default App;
