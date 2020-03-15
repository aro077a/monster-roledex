import React from "react";
import { useAPI } from "./hooks/useApi";

import CardList from "./components/card-list/CardList";

import "./App.css";

const App = () => {
  const [users] = useAPI();

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
};

export default App;
