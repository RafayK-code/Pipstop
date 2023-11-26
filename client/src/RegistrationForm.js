import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    // Perform form validation and submission logic here
    // I still need prevent default
    //Take the form and build a json object
    // Submit in post using axios
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className ="registration-form">
        <h1>Register Now</h1>
        <label>
          <input 
          class="input-box" 
          type="text"
          placeholder="First Name"
          />
        </label>
        <label>
          <input 
          class="input-box" 
          type="text" 
          placeholder="Last Name"
          />
        </label>
        <label>
          <input
            class="input-box" 
            type="text" 
            placeholder="Email"
          />
        </label>
        <label>
          <input
            input class="input-box" 
            type="text" name="phoneNumber" 
            placeholder="Phone Number" 
            required
          />
        </label>
      <button class="register-btn" type="submit">Register</button>
    </div>
    </form>
  );
};

export default RegistrationForm;
