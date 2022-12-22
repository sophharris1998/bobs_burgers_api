import { useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";

const App = () => {
  const [char, setChar] = useState();

  const getChar = async () => {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/characters/"
    );
    const data = await response.json();
    var randomChar = Math.floor(Math.random() * data.length);
    setChar(data.results.slice(randomChar, randomChar + 3));
    console.log(char);
  };

  return (
    <div className="app">
      <h1> Bobs Burgers </h1>
      <Button label="Get Random Character" handleClick={getChar} />
      {char && (
        <Card
          name={char.name}
          image={char.image}
          gender={char.gender}
          hairColor={char.hairColor}

          // image, gender, hairColor
        />
      )}
    </div>
  );
};

export default App;
