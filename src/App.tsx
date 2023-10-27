import React, { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // After Renders
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "Hello World";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
