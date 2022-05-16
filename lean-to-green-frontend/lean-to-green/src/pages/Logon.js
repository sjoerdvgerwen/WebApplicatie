import React, { useState } from "react";
import { Redirect } from "react-router";
import '../styles/login.css'

const Logon = ({ setName }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState();

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://localhost:5001/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    const content = await response.json();
    setName(content.name)
    sessionStorage.setItem('isLogged', 'true');
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <main class="form-signin">
      <form onSubmit={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default Logon;
