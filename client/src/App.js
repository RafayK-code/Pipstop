import React from "react"
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  const [data, setUserData] = React.useState(null);
  //Tester

  const handleButtonClick = async () => {
    try {
      const postData = {
        email: 'example@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123-456-7890',
        teamName: 'Purple daddies' 
      };

      const response = await axios.post('/register', postData);

      setUserData("User created!");
    }
    catch (error) {
      setUserData(error.response.data);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={handleButtonClick}>
          Create user.
        </button>
        <p>{!data ? "" : data}</p>
      </header>
    </div>
  );
}

export default App;
