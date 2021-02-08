import "./App.css";
import React, { useReducer } from "react";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";

function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
