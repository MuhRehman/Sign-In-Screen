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
  <div class="px-6 pt-4 pb-2">
    <button onClick={logout} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Logout</button>
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
