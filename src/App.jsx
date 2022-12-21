import "./App.scss";
import Button from "./Components/Button/Button";

const App = () => {
  const getUser = async () => {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/characters/"
    );
    const data = await response.json();
    console.log(data[4]);
  };

  return (
    <div className="app">
      <h1> Bobs Burgers </h1>
      <Button label="Get Random Character" onClick={getUser} />
    </div>
  );
};

export default App;
