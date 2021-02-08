import "./App.css";
import React, { useReducer } from "react";
import ParentComponent from "./components/useCallback/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
