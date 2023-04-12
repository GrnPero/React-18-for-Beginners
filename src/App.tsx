import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  // Hook
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          My Alert
        </Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        Press Me!
      </Button>
    </div>
  );
}

export default App;
