import Like from "./components/Like";
import { useState } from "react";

function App() {
  const [showLike, setShowLike] = useState(false);

  return (
    <div>
      <Like
        showLike={showLike}
        onClick={() => {
          if (showLike) setShowLike(false);
          else setShowLike(true);
          console.log("Like clicked");
        }}
      />
    </div>
  );
}

export default App;
