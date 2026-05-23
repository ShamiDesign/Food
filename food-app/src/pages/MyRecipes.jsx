import AddRecipes from "../components/AddRecipes.jsx";
import RecipeGrid from "../components/RecipeGrid.jsx";

const MyRecipes = () => {
  return (
    <section className=" flex flex-col my-10 px-20 gap-10 ">
      {/* <h1 className=" text-center font-semibold text-4xl text-[var(--main-color)]">
        My Recipes
      </h1> */}

     
      <AddRecipes />
      <RecipeGrid />
    </section>
  );
};

export default MyRecipes;
