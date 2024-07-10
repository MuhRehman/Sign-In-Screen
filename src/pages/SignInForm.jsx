import { useState } from "react";
import React from 'react'

export default function SignInForm() {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);

  const toggleError = () => {
    alert("Dd");
    setIsErrorShown(!isErrorShown);
  };

  return (
    <>
<div class="bg-gray-100 flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}

{/* <!-- Right: Login Form --> */}
<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h2 class="text-6xl font-semibold mb-4 text-left">Welcome back</h2>
  <h4 class="text-1xl font-semibold mb-4 text-left">You need to be signed in to access the project dashboard.</h4>
  <form action="#" method="POST">
    {/* <!-- Username Input --> */}
    <div class="mb-4 ">
      <label for="username" class="block text-gray-600 text-left mb-2 ">Email or username</label>
      <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
    </div>
    {/* <!-- Password Input --> */}
    <div class="mb-4">
      <label for="password" class="block text-gray-600 text-left mb-2">Password</label>
      {/* <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
    */}

    <div class="relative  focus-within:text-gray-900 dark:focus-within:text-gray-800 ">
    <div aria-hidden="true" class="absolute inset-y-0 flex items-center px-4 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
    </div>
    <input class="pl-11 text-gray-800 pr-4 pr-11 py-2 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full" id="password"  name="password" required="required" autocomplete="new-password" placeholder="password" 
 type={ showPassword ? "text" : "password" }
  />

    
  <div class="absolute right-0 z-30 inset-y-1 flex items-center px-4 ">
  <button type="button" click="isshow=!isshow"  onClick={toggleError} class="z-30 ">
  {isErrorShown ? 

        <h1>klsndsk</h1>                   
  :
  <svg x-show="!isshow" aria-hidden="true" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>    
}
  </button>
  </div>


    </div>
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div class="mb-4 flex justify-between">
    <div>

      <input type="checkbox" id="remember" name="remember" class="text-blue-500 h-4 w-4"/>
      <label for="remember" class="text-gray-600 ml-2">keep me sign in</label>
    </div>
    <div class="mb-4 text-black-500 underline ">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    </div>
    {/* <!-- Forgot Password Link --> */}
    
    {/* <!-- Login Button --> */}
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  {/* <!-- Sign up  Link --> */}
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Sign in with Google</a>
  </div>
  {/* <!-- Sign up  Link --> */}
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Haven’t joined yet? <span className='underline'>Sign in</span> </a>
  </div>
</div>
<div class="w-1/2 h-screen hidden lg:block">
  {/* <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" class="object-cover w-full h-full" /> */}
</div>
</div>

    </>
  )
}
