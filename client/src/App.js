import React from "react"
import './App.css';
import RegistrationForm from "./RegistrationForm";

import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm />
        <p>{!RegistrationForm.response ? '' : RegistrationForm.response}</p>
      </header>
    </div>
  );
}

export default App;
