import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import Home from "./Home";

const Navbar = (props) => {
    const logoStyle = {
        height: '20px',
        width: 'auto'
    }

    return (
        <Router>
        <div class="nav-bar">
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/media/pipstop_logo_white.svg'} alt="logo" class="logo" style={logoStyle}/>
            </Link>

            <div class="navbar-links">
                <div class="dropdown">
                    <img src="path-to-profile-picture.png" alt="Profile" class="profile-pic" />
                    <div class="dropdown-content">
                        <button onClick={ () => {props.onLogout()}}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
            <Routes>
                <Route path='/' element={<Home user={props.user} />} />
            </Routes>
        </Router>
    );
}

export default Navbar