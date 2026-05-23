
import { createContext, useContext } from "react";

export const RecipeContext= createContext({
   recipes: [],
  addRecipe: () => {},
})

export const useRecipe=()=> useContext(RecipeContext)