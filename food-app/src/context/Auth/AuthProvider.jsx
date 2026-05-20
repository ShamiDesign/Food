import { useState } from "react";
import {  AuthContext } from "./AuthContext.jsx";

const AuthProvider=({children})=>{
    const EMAIL="email" // لتسهيل القراءة التعديل في وقت لاحق
    const TOKEN="token"

    const [email, setEmail]=useState(localStorage.getItem(EMAIL))
    const [token, setToken]=useState(localStorage.getItem( TOKEN))
    const isAuthenticated=!!token

    const login=(email, token)=>{
        setEmail(email)
        setToken(token)
        localStorage.setItem(EMAIL, email )
        localStorage.setItem( TOKEN, token )
    }
    const logout=()=>{
        localStorage.removeItem(EMAIL)
        localStorage.removeItem(TOKEN)
        setEmail(null)
        setToken(null)
    }

return(
    <AuthContext.Provider value={{email, token , isAuthenticated, login, logout}}>
{children}
</AuthContext.Provider>
)
}
export default AuthProvider