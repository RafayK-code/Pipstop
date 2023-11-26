import React, { useState } from 'react';

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

 // Event handler for form input changes
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Account Created');
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
          class="input-box" 
          name ="name"
          placeholder="First Name"
          value = {firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id ="name"
          />
        </label>
        <label htmlFor="lastName">
          <input 
          class="input-box" 
          name = "name"
          placeholder="Last Name"
          value ={lastName}
          onChange={(e) => setLastName(e.target.value)} 
          id = "name"
          />
        </label>
        <label htmlFor="email">
          <input
            class="input-box" 
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
            input class="input-box" 
            type="phoneNumber" 
            name="phoneNumber" 
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id = "email"
          />
        </label>
      <button class="register-btn" type="submit">Register</button>
    </div>
    </form>
  );
};

export default RegistrationForm;
