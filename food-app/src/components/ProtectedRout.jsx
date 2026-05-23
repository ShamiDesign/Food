import { useAuth } from "../context/Auth/AuthContext.jsx";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRout = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="./Login" replace />;
  }
  console.log("Protected Page");
  return <Outlet />;
};

export default ProtectedRout;
