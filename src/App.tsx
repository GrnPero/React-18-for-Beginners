import React from "react";
import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Jane",
      },
    });
  };

  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
