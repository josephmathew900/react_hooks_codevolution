import "./App.css";
import React from "react";
import CounterThree from "./components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterThree />
    </div>
  );
}

export default App;
