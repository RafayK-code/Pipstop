import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    teamName: '',
  });

const [account, setAccount] = useState(null);

 // Event handler for form input changes
const handleChange = (e) => {
  const { name, value } = e.target; 
  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault()

  const newAccount = { ...formValues};
    // Perform form validation and submission logic here
    // I still need prevent default
    //Take the form and build a json object
    // Submit in post using axios
  setAccount(newAccount);
  console.log('Account Created:', newAccount);
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
          value = {formValues.firstName}
          onChange={handleChange}
          />
        </label>
        <label>
          <input 
          class="input-box" 
          type="text" 
          placeholder="Last Name"
          value ={formValues.lastName}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
            class="input-box" 
            type="text" 
            placeholder="Email"
            value = {formValues.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            input class="input-box" 
            type="text" name="phoneNumber" 
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleChange}
          />
        </label>
      <button class="register-btn" type="submit">Register</button>
    </div>
    </form>
  );
};

export default RegistrationForm;
