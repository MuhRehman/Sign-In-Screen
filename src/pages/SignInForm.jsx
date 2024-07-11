import { useState, useContext } from "react";
import React from "react";
import { AuthContext } from "../context/AuthContext";
import mainLogo from'../assets/logo.png';
import rightBanner from'../assets/Right.png';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
     
   
    if (username.trim() === '' || password.trim() === '') {
      setError('Both username and password are required.');
      setLoading(false);
      return;
    }
     
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      login(data);

      console.log("Success:", data);
   
    } catch (error) {
      setError(error.message);
    } finally {
      
      setLoading(false);
    }
  };

  const toggleError = () => {
    setIsErrorShown(!isErrorShown);
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div class="bg-gray-100 flex justify-center items-center h-screen">
      
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <div class=" lg:block">
         <img src={mainLogo}  alt="img" class="mb-4" /> 
        </div>
          <h2 class="text-6xl font-semibold mb-4 text-left custom-heading">Welcome back</h2> 
          <h4 class="text-1xl font-semibold mb-4 text-left custom-tagline">You need to be signed in to access the project dashboard.</h4> 
          <form action="#" method="POST">
    
            <div class="mb-4 ">
              <label for="username" class="block text-gray-600 text-left mb-2 input-custom-field">Email or username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div class="mb-4">
              <label for="password" class="block text-gray-600 text-left mb-2 input-custom-field">Password</label>
            

              <div class="relative  ">
             
                <input
                  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  name="password"
                  required="required"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="new-password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />

                <div class="absolute right-0 z-30 inset-y-1 flex items-center px-4 ">
                  <button
                    type="button"
                    click="isshow=!isshow"
                    onClick={toggleError}
                    class="z-30 "
                  >
                    {isErrorShown ? (
                      <div>
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L22 22"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <svg
                        x-show="!isshow"
                        aria-hidden="true"
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
         
            <div class="mb-4 flex justify-between">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="text-blue-500 h-4 w-4"
                />
                <label for="remember" class="text-gray-600 ml-2 text-base checkbox-forgot-label">
                  keep me sign in
                </label>
              </div>
              <div class="mb-4 text-black-500 underline ">
                <a href="#" class="hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            {error && <div className="custom-btn mb-4" style={{ color: 'red' }}>{error}</div>}
        
            {/* <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button> */}
            <button
              type="submit"
              onClick={handleSubmit}
              class=" text-black font-semibold rounded-md py-2 px-4 w-full custom-btn sign-btn"
              disabled={loading}
            >
           
              {loading ? 'Logging in...' : 'Sign in'}
            </button>
          </form>

        

          <button type="button" class="text-gray-900 google-btn bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3 10.2084C19.3 9.55837 19.2417 8.93337 19.1333 8.33337H10.5V11.8792H15.4333C15.2208 13.025 14.575 13.9959 13.6042 14.6459V16.9459H16.5667C18.3 15.35 19.3 13 19.3 10.2084Z" fill="#4285F4"/>
            <path d="M10.5 19.1667C12.975 19.1667 15.05 18.3459 16.5667 16.9459L13.6042 14.6459C12.7833 15.1959 11.7333 15.5209 10.5 15.5209C8.1125 15.5209 6.09167 13.9084 5.37083 11.7417H2.30833V14.1167C3.81667 17.1125 6.91667 19.1667 10.5 19.1667Z" fill="#34A853"/>
            <path d="M5.37083 11.7416C5.1875 11.1916 5.08333 10.6041 5.08333 9.99997C5.08333 9.3958 5.1875 8.8083 5.37083 8.2583V5.8833H2.30833C1.66666 7.16068 1.33276 8.57048 1.33333 9.99997C1.33333 11.4791 1.6875 12.8791 2.30833 14.1166L5.37083 11.7416Z" fill="#FBBC05"/>
            <path d="M10.5 4.47921C11.8458 4.47921 13.0542 4.94171 14.0042 5.85004L16.6333 3.22087C15.0458 1.74171 12.9708 0.833374 10.5 0.833374C6.91667 0.833374 3.81667 2.88754 2.30833 5.88337L5.37083 8.25837C6.09167 6.09171 8.1125 4.47921 10.5 4.47921Z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
       
          <div class="mt-6 text-blue-500 text-center sign-text">
            <a href="#" class=" custom-btn hover:underline">Haven’t joined yet? <span className='underline'>Sign in</span> </a>
          </div>
        </div>
        <div class="w-1/2 h-screen hidden lg:block">
         <img src={rightBanner}
          alt="Placeholder Image" class="object-cover w-full h-full" /> 
        </div>
      </div>
    </>
  );
}
