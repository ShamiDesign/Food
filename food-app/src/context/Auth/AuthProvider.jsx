import { useState } from "react";
import {  AuthContext } from "./AuthContext.jsx";

const AuthProvider=({children})=>{
    const [email, setEmail]=useState(localStorage.getItem('email'))
    const [token, setToken]=useState(localStorage.getItem('token'))
    const login=(email, token)=>{
        setEmail(email)
        setToken(token)
        localStorage.setItem('email', email )
        localStorage.setItem("token", token )

    }
return(
    <AuthContext.Provider value={{email, token ,login}}>
{children}
</AuthContext.Provider>
)
}
export default AuthProvider