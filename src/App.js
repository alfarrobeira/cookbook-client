import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import useContentful from "./services/useContentful.jsx";
import BackButton from "./components/BackButton.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ShowAllButton from "./components/ShowAllButton.jsx";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes(searchQuery).then((response) => setRecipes(response));
    console.log(searchQuery);
  }, [searchQuery]);

  return <div className="App">
    <Link to="/" className="text-decoration-none text-reset"><h1 className="display-2 my-4">Cookbook</h1></Link>
    <BackButton />
    <ShowAllButton setSearchQuery={setSearchQuery} />
    <SearchBar setSearchQuery={setSearchQuery} />
    <Routes>
      <Route path="/" element={ <div /> } />
      <Route path="recipes" element={ <RecipeList recipes={recipes} /> } />
      <Route path="recipes/:id" element={ <RecipeCard /> } />
    </Routes>
  </div>;
}

export default App;
