import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/register/Login.jsx";
import AuthProvider from "./context/Auth/AuthProvider.jsx";
import RecipeProvider from "./context/recipe/RecipeProvider.jsx";
import ProtectedRout from "./components/ProtectedRout.jsx";
import MyRecipes from "./pages/MyRecipes.jsx";
import AddRecipes from "./components/AddRecipes.jsx";

const App = () => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AddRecipes" element={<AddRecipes />} />
              {/* <Route path="/MyRecipes" element={<MyRecipes />} /> */}
            <Route element={<ProtectedRout />}>
              <Route path="/MyRecipes" element={<MyRecipes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;
