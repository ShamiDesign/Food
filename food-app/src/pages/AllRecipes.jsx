import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect } from "react";
import { useState } from "react";
import {BASE_URL} from "../constents/BASE_URL"
const AllRecipes = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch(BASE_URL);
                const data = await res.json();
                console.log(data);
                setRecipe(data);
            } catch (error) {
                console.log("can't fetch data", error);
            }
        };
        fetchRecipe();
    }, []);

    return (
        <section className=" flex flex-col mt-10 px-20 ">
            <h1 className=" text-center font-semibold text-4xl text-[var(--main-color)]">All Recipes</h1>
            <dev className="flex justify-center gap-10 flex-wrap my-10 w-full">
                {recipe.map((i) => (
                    <dev key={i.id} className="flex flex-col gap-2 px-3 py-5 rounded shadow w-[350px] relative">
                        <FavoriteBorderIcon className='absolute top-5 right-5 text-[var(--main-color)]' />
                        <dev className="w-full overflow-hidden flex justify-center items-center hover:scale-110 transition duration-300 ">
                            <img src={i.image} alt="" className="w-[200px]" />
                        </dev>
                        <h2 className=" text-center font-semibold text-xl text-[var(--sec-color)]">{i.title}</h2>
                        <h4>
                            <span className="text-[var(--main-color)] font-semibold">Ingredients : </span>
                            <span className="text-sm text-gray-600">{i.ingredients}</span>
                        </h4>
                        <p><span className="text-[var(--main-color)] font-semibold"> Instructions : </span>
                            <span className="text-sm text-gray-600"> {i.instructions} </span></p>

                    </dev>
                ))}
            </dev>
        </section>
    );
};

export default AllRecipes;
