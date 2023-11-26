import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [teamName, setTeamName] = useState(null);

  const [response, setResponse] = useState(null);

 // Event handler for form input changes
const handleSubmit = async (e) => {
  try {
    e.preventDefault();

    const newAccount = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      teamName: teamName
    };

    const response = await axios.post('/register', newAccount);

    setResponse("User created successfully!");
  }
  catch(err) {
    setResponse(err.response.data)
  }
  
};
    // Perform form validation and submission logic here
    // I still need prevent default
    //Take the form and build a json object
    // Submit in post using axios

  return (
    <form onSubmit={handleSubmit}>
      <div className ="registration-form">
        <h1>Register Now</h1>
        <label htmlFor="firstName">
          <input 
          className="input-box" 
          name ="name"
          placeholder="First Name"
          value = {firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id ="name"
          />
        </label>
        <label htmlFor="lastName">
          <input 
          className="input-box" 
          name = "name"
          placeholder="Last Name"
          value ={lastName}
          onChange={(e) => setLastName(e.target.value)} 
          id = "name"
          />
        </label>
        <label htmlFor="email">
          <input
            className="input-box" 
            name = "email"
            type = "email"
            placeholder="Email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            id = "email"
          />
        </label>
        <label htmlFor ="phoneNumber">
          <input
            className="input-box" 
            type="tel" 
            name="phoneNumber" 
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id = "email"
          />
        </label>
        <label htmlFor ="teamName">
          <input
            className="input-box" 
            type="text" 
            name="teamName" 
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            id = "email"
          />
        </label>
      <button className="register-btn" type="submit">Register</button>
      <h1>{!response ? '' : response}</h1>
    </div>
    </form>
  );
};

export default RegistrationForm;