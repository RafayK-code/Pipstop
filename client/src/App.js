import React, { useEffect, useState } from "react";
import './App.css';

import Layout from "./Layout";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    //navigate('/register' | '/login')
  }, [navigate])

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => { 
    setUser(userData);
    console.log(userData);
  }

  const handleLogout = () => {
    navigate('/register');
    setUser(null);
  }

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginForm onLogin={handleLogin} />}/>
        <Route path='/register' element={<RegistrationForm onLogin={handleLogin} />}/>
        <Route path='/' element={<Layout user={user} onLogout={handleLogout}/>} />
      </Routes>
      {!user ? (
        navigate('/register' | '/login')
      ) : (
        navigate('/')
      )}
      
    </div>
  );
}

export default App;
