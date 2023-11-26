import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = (props) => {
    const [email, setEmail] = useState(null);
    const [response, setResponse] = useState(null);
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const account = { 
                email: email 
            };

            const user = await axios.post('/login', account)
            console.log(user);
            props.onLogin(user.data);
        }
        catch (err) {
            setResponse(err.response.data);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className ="registration-form">
            <h1>Sign in</h1>
            <label htmlFor="email">
                <input
                    className="input-box" 
                    name = "email"
                    type = "email"
                    placeholder="Email"
                    value = { email }
                    onChange={(e) => setEmail(e.target.value)}
                    id = "email"
                />
            </label>
            <button className="register-btn" type="submit">Login</button>
            <h1>{!response ? '' : response}</h1>
        </div>
    </form>
    );
};

export default LoginForm;