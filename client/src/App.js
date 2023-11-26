import React, { useState } from "react";
import './App.css';

import Navbar from './Navbar'
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    console.log(userData);
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <div>
      {!user ? (
        <RegistrationForm onLogin={handleLogin}/>
      ) : (
      <Navbar user={user} onLogout={handleLogout}/>
      )}
    </div>
  );
}

export default App;
