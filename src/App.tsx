import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "London", "Paris", "Tokyo", "Moscow"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
