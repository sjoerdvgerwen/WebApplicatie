import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://localhost:5001/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/logon" />;
    }

    return (
        <form onSubmit={submit}>
            <div className="form-inner">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"
                        onChange={e => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}

export default Register; 