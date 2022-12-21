import { useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";

const App = () => {
  const [user, setUser] = useState();

  const getUser = async () => {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/characters/"
    );
    const data = await response.json();
    setUser(data[0]);
  };

  return (
    <div className="app">
      <h1> Bobs Burgers </h1>
      <Button label="Get Random Character" onClick={getUser} />
    </div>
  );
};

export default App;
