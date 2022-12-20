import "./App.scss";
import Characters from "./Container/Characters/Characters";
import {useState, useEffect}

const App = () => {
  const getCharacters = async () => {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=432"
    );
    const data = await response.json();
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <h1> Bob's Burgers </h1>
      <Characters />
    </div>
  );
};

export default App;
