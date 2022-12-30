import { useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import ProfileContainers from "./Container/ProfileContainers/ProfileContainers.jsx";

const App = () => {
  const [char, setChar] = useState([]);

  const getChar = async () => {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/characters/"
    );
    const data = await response.json();

    var randomChar = Math.floor(Math.random() * data.length);
    console.log(randomChar);
    setChar(data.slice(randomChar, randomChar + 5));
    console.log(char);
  };

  return (
    <div className="app">
      <h1> Bobs Burgers </h1>
      <Button label="Get Random Character" handleClick={getChar} />
      <ProfileContainers profiles={char} />
    </div>
  );
};

export default App;
