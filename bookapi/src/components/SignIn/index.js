import React, { useState } from "react";
import validator from "validator";
import { RegisterContainer, RegisterForm, Title, Form, FormField, Label, Input,Button } from "./styled";
import AuthenticatedNavbar from "../AuthenticatedNavbar";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validator.isEmail(email)) {  // library validator.js heck for empty email and password fields
      setErrorMessage("Please enter a valid email");
      return;
    }

    const requestResponse = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name})
    };

    fetch(`http://5.22.217.225:8081/api/v1/auth/register`, requestResponse)
      .then((response) => response.json())
      
      .then((data) => {
        console.log(data.data.token);
        localStorage.setItem("token", data.token);

        if (data.data.token) { 
            window.location.href = `./book/`;
           
        } else {
          setErrorMessage("Invalid email or password.");
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Authentication error.");
      });
  };

  return (
    <>
    <AuthenticatedNavbar />
    <RegisterContainer>
      <RegisterForm>
        <Title>Sign In</Title>
          <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Email:</Label>
              <Input
              type="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="username"
            />
          </FormField>
          <FormField>
          <Label>Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="current-email"
          />
          </FormField>
          <FormField>
          <Label>Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          </FormField>

      {errorMessage && <p>{errorMessage}</p>}
      <Button type="submit">Login</Button>
    </Form>
    </RegisterForm>
    </RegisterContainer>
    </>
  );
}


export default SignIn;