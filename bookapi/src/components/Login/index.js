import React, { useState } from "react";
import validator from "validator";
import { Container, LoginForm, Title, Form, FormField, Button, Label, Input, Modal, ModalContent, CloseButton, ErrorMessage } from "./style";
import AuthenticatedNavbar from "../AuthenticatedNavbar";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validator.isEmail(email)) {
      setErrorMessage("Please enter a valid email");
      setShowModal(true);
      return;
    }

    const requestResponse = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    fetch(`http://5.22.217.225:8081/api/v1/auth/login`, requestResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.token);
        sessionStorage.setItem("token", data.data.token);

        if (data.data.token) {
          window.location.href = `./book`;
        } 
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Invalid email or password");
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AuthenticatedNavbar />
      <Container>
        <LoginForm>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label>Email:</Label>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                fontFamily="Arial, sans-serif"
              />
            </FormField>
            <FormField>
              <Label>Password:</Label>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                fontFamily="Arial, sans-serif"
              />
            </FormField>
            <Button type="submit">Login</Button>
          </Form>
          <span>
            Don't have an account? <Link to="/register">Sign in</Link>
          </span>
        </LoginForm>
      </Container>
      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>Close</CloseButton>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Login;
