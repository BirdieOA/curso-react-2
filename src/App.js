import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div>
        <input type="number" /> +
        <input type="number" /> =
        <input type="number" readOnly/>
      </div>
    </>
  );
};

export default App;
