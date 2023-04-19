import { useState } from "react";

function App() {
  const [isVisibile, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisibile);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
