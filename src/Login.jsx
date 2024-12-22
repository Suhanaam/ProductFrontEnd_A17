import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = ({onLogin}) => {
   const {register,handleSubmit,formState:{errors}}=useForm();
   //database url access cheyyan env file
   const apiUrl=import.meta.env.VITE_PRODUCTS_API
   const navigate=useNavigate()
   const chechlogin=(data)=>{
    console.log("Form data",data)
    axios.post(`${apiUrl}/users/login`,data)
    .then(response=>{
        console.log(response.data);
        // alert("login successfull")
        onLogin()
        navigate('/products');
    })
    .catch(error=>console.log("there is error",error))
}


  return (
    <div>
        <h2>login form</h2>
        <form onSubmit={handleSubmit(chechlogin)}>
            <div>
            <input
            {...register("email")}
             type="email" 
             placeholder='enter email'
            
            />
            </div>
           <div>
            <input 
            {...register("password")}
            type="password" 
            placeholder='enter password'
             />
           </div>
           <button type="submit">login</button>
        </form>
    </div>
  )
}

export default Login