import Button from '@mui/material/Button';
import hero from "../assets/hero.png";
import AllRecipes from './AllRecipes.jsx';
const Home = () => {
  return (
    <section className=" w-full flex flex-col pt-10 h-screen ">
      
      <div className="flex justify-between items-center gap-x-6 px-20 ">
        <div className="flex flex-col gap-y-6 w-2/3 justify-start" >
          <h1 className=" text-[var(--main-color)] font-semibold text-4xl">Foodie Hub</h1>
          <h3 className="text-gray-600 w-1/2 text-xl">Discover delicious recipes from around the world, made simple for every home cook.</h3>
        <Button variant='contained'  sx={{backgroundColor: "var(--main-color)","&:hover":
         {backgroundColor: "var(--hover-color)",
    },}} className='w-1/3' >Start Cooking</Button>
        </div>
        <div className="image">
            <img src={hero} alt="" className='w-[280px]' />
        </div>
      </div>
     <div className='w-full -mt-20 '>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ca2e55" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,250.7C384,267,480,213,576,202.7C672,192,768,224,864,224C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
     </div>
     <AllRecipes />
    </section>
  )
}

export default Home