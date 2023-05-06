import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../login";
import Register from "../register";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import BookList from "../book";
import UserProfile from "../user";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"> Gandra's Book Store </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home"> Home </Nav.Link>
              <Nav.Link href="/login"> Login </Nav.Link>
              <Nav.Link href="/register"> Register </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/book" element={<BookList />} />
              <Route path="/register" element={<Register />} />
              <Route path="/book" element={<UserProfile />} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
