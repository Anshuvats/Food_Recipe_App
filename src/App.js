import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "f319548c";
  const APP_KEY = "90fa66092db76bf43e400de26e1d9ad3";

  useEffect(async() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipe recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
