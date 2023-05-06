import React, { useState } from "react";
import validator from "validator";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validator.isEmail(email)) {  // library validator.js check for empty email and password fields
      setErrorMessage("Please enter a valid email");
      return;
    }

    const requestResponse = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password})
    };

    fetch(`http://5.22.217.225:8081/api/v1/auth/login`, requestResponse)
      .then((response) => response.json())
      
      .then((data) => {
        console.log(data.data.token);
        sessionStorage.setItem("token", data.data.token);

        if (data.data.token) { 
            window.location.href = `./book`;
           
        } else {
          setErrorMessage("Invalid email or password.");
          //console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Authentication error.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;