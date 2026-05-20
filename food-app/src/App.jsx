import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/register/Login.jsx";
import AuthProvider from "./context/Auth/AuthProvider.jsx";

const App = () => {
  return (
  <AuthProvider>
     <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Login" element={<Login />}/>
   </Routes>
   </BrowserRouter>
  </AuthProvider>
  )
}

export default App