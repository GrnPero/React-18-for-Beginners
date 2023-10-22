import React from "react";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Onion"],
    });
  };

  return (
    <div>
      <h1>{pizza.toppings}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
