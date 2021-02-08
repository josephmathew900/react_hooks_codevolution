import "./App.css";
import React, { useReducer } from "react";
import DataFetchingTwo from "./components/DataFetchingTwo";

export const CountContext = React.createContext();

function App() {
  return (
    <div className="App">
      <DataFetchingTwo />
    </div>
  );
}

export default App;
