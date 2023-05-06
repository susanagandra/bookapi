import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";

const NewBook = () => {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [showInsertForm, setShowInsertForm] = useState("");
  const token = sessionStorage.getItem("token");
  

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
      })
    };
  
    fetch(`http://5.22.217.225:8081/api/v1/book/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.token);
        localStorage.setItem("token", data.token);
  
        if (data.data.token) { 
          window.location.href = `./book/`;
        } else {
          setError("Can't insert this book");
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Authentication error.");
      });
}

return (
  <div>
    {!showInsertForm && (
      <Button
        variant="primary"
        onClick={() => setShowInsertForm(true)}
        style={{ marginBottom: "30px" }}
      >
        Insert Book
      </Button>
    )}
    {showInsertForm && (
      <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <Form.Label>Year:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Year"
            value={year}
            onChange={(event) => setYear(parseInt(event.target.value))}
          />

          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

        <Button
          variant="primary"
          type="submit"
          style={{ marginBottom: "30px" }}
        >
          Submit
        </Button>
      </Form>
    )}

  </div>
  );
}


export default NewBook; 