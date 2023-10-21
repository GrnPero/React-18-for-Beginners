import Message from "./components/Message";
import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Coca Cola",
    price: 2.5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 3.5 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
