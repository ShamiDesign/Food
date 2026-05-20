import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import {BASE_URL} from "../../constents/BASE_URL.jsx"
import { useAuth } from "../../context/Auth/AuthContext.jsx";
import {useNavigate} from "react-router-dom"

const Register = () => {
const{login}=useAuth()
const navigate=useNavigate()
  const [error, setError]=useState()
  
  const firstNameRef= useRef(null)
  const lastNameRef= useRef(null)
  const emailRef= useRef(null)
  const passwordRef= useRef(null)

const onSubmit= async()=>{

  const firstName= firstNameRef.current?.value;
  const lastName= lastNameRef.current?.value;
  const email= emailRef.current?.value;
  const password= passwordRef.current?.value;

 

if(!firstName || !lastName || !email || !password){
  setError("Validate All Felids")
  return
}

  const fetchUserData= await fetch(`${BASE_URL}User/register`,{
      method:'POST',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({
       firstName,lastName, email, password
      })
    })
if(!fetchUserData.ok){
setError("Email is Already exist")
return
}
const data= await fetchUserData.json()
if(!data){
  setError("Can't find token")
  return
}
login(email, data.token)
console.log(data)
navigate('/')
}

  return (
    <section className="flex flex-col items-center h-screen mt-20 gap-10">
      <h1 className="text-4xl text-[var(--main-color)] font-semibold tracking-widest">
        Welcome Agan
      </h1>
      <div className="flex flex-col items-center w-[500px] border border-gray-200 rounded-xl shadow px-6 py-10 gap-4 ">
       
        
          <TextField
          inputRef={firstNameRef}
            id="outlined-basic"
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
          />
       
        
          <TextField
          inputRef={lastNameRef}
            id="outlined-basic"
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            
          />
          <TextField
          inputRef={emailRef}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            
          />
          <TextField
          inputRef={passwordRef}
            id="outlined-basic"
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            type="password"
            
          />
       
       
       
       
        <Button
        onClick={onSubmit}
          variant="contained"
          sx={{ background: "var(--main-color)" }}
          fullWidth
        >
          Submit
        </Button>
        {error &&<h3 className="text-red-500 text-base font-semibold">{error}</h3>}
      </div>
    </section>
  );
};

export default Register;
