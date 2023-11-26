import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className ="registration-form">
        <h1>Register Now</h1>
        <label>
          <input 
          class="input-box" 
          type="first name"
          placeholder="First Name"
          value={formData.username}
          onChange={handleChange}
          />
        </label>
        <label>
          <input 
          class="input-box" 
          type="last name" 
          placeholder="Last Name"
          value={formData.username}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
            class="input-box" 
            type="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            input class="input-box" type="tel" name="phoneNumber" 
            placeholder="Phone Number" 
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      <button class="register-btn" type="submit">Register</button>
    </div>
    </form>
  );
};

export default RegistrationForm;
