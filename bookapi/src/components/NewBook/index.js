import React, { useState } from "react";
import { Container, Form, Label, Input, Button } from "./style";
import { useNavigate } from "react-router-dom";

const NewBook = () => {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [isBookInserted, setIsBookInserted] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        year: year,
      }),
    };

    fetch(`http://5.22.217.225:8081/api/v1/book/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.token);
        localStorage.setItem("token", data.token);

        if (data.data.token) {
          console.log("Book inserted successfully!");
          setTitle("");
          setDescription("");
          setYear("");
          setIsBookInserted(true);
          navigate("/book"); // Navigate to "/book" path
        } 
      })
      .catch((error) => {
        console.error(error);
        setError("Authentication error.");
        setIsBookInserted(false);
      });
  };

  if (isBookInserted) {
    return (
      <Container>
        <p>Book inserted successfully!</p>
      </Container>
    );
  }

  return (
    <Container>
      {error && <p>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Label>Title:</Label>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Label>Year:</Label>
        <Input
          value={year}
          onChange={(event) => setYear(parseInt(event.target.value))}
        />

        <Label>Description:</Label>
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default NewBook;
