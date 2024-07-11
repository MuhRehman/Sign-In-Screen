import './App.css';
import SignInForm from './pages/SignInForm';
import { AuthContext } from './context/AuthContext';
import React, { useContext } from 'react';

function App() {

  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="App">

      {auth ? (
        <div className='h-screen flex items-center justify-center bg-gray-100'>
          {/* <h2>Welcome, {auth.firstName}!</h2>
          <img src={auth.image} alt="User Avatar" />
          <button onClick={logout}>Logout</button> */}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={auth.image} alt="User Avatar" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Welcome, {auth.firstName}!</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4  pb-5">
            <button onClick={logout} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
          </div>
        </div>
        </div>
      ) : (
        <SignInForm />
      )}
              
    </div>
  );
}

export default App;
