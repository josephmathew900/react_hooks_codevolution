import "./App.css";
import React, { useReducer } from "react";
import DataFetchingOne from "./components/DataFetchingOne";

export const CountContext = React.createContext();

function App() {
  return (
    <div className="App">
      <DataFetchingOne />
    </div>
  );
}

export default App;
