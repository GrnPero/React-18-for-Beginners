import React from "react";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div>
      <h1>
        {cart.items
          .map((item) => `${item.title} x ${item.quantity}`)
          .join(", ")}
      </h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
