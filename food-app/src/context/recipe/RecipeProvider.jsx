import { useEffect, useState } from "react";
import { RecipeContext } from "./RecipeContext";
import { BASE_URL } from "../../constents/BASE_URL.jsx";

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
useEffect(()=>{
    const fetchRecipe = async () => {
    try {
      const res = await fetch(`${BASE_URL}`);
      const data = await res.json();
      setRecipes(data);
      console.log("Backend Data", data);
    } catch (error) {
      console.log("can't fetch recipe", error);
    }
  };
  fetchRecipe();
},[])

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
export default RecipeProvider;
