import { useContext , createContext} from "react";

export const AuthContext=createContext({
    email:null,
    token:null,
    login:()=>{}
})
export const useAuth=()=>useContext(AuthContext)