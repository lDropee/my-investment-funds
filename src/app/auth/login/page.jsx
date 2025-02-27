"use client";
import { useForm }   from "react-hook-form";
import { useRouter } from 'next/navigation'
import { useState }  from 'react'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [error, setError] = useState(null)

    const onSubmitLogin = handleSubmit(async (data) => {
        const userRegister = getUsers();

        if(!userRegister){
          setError("You must register."); 
          return;
        }

        if (userRegister.email !== data.email) {
            setError("User is not registered."); 
            return;
        } 

        if (userRegister.password !== data.password) {
          setError("Password is incorrect.");
          return;
        }

        sessionStorage.setItem("isLoggedIn", "true");
        router.push('/dashboard')
        router.refresh()
        
      });

    function getUsers() {
     return JSON.parse(sessionStorage.getItem("userRegister"));
    }

    return(
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
          <form onSubmit={onSubmitLogin} className="w-1/4">
    
            {error && (
              <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
            )}
    
            <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>
    
            <label htmlFor="email" className="text-slate-300 mb-2 block text-sm">
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="user@email.com"
            />
    
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
    
            <label htmlFor="password" className="text-slate-300 mb-2 block text-sm">
              Password:
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="******"
            />
    
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
    
            <button className="w-full bg-teal-50 text-sky-600 p-3 rounded-lg mt-2">
              Login
            </button>
          </form>
        </div>
      );
}
export default LoginPage