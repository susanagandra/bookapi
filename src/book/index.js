import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import UserProfile from "../user";
import NewBook from "./newbook";
import UpdateBook from "./updatebook";

const BookList = () => {
  const [error, setError] = useState(null);
  const [bookItem, setBookItem] = useState([]);
  const [filterBookId, setFilterBookId] = useState("");
  const token = sessionStorage.getItem("token");
  

  useEffect(() => {
    
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://5.22.217.225:8081/api/v1/book/?sort_by=year&order_by=desc`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBookItem(data.data);      
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while authenticating.");
      });
  }, []);


  const handleFilter = () => {
    const filteredBookById = bookItem.filter((book) => book.id === parseInt(filterBookId, 10));   //parseInt function to convert the filterBookId string to a number, and passing a radix of 10 to indicate that we're working with base-10 numbers

    if (filteredBookById.length === 0) {
      setBookItem([]);
      setError(`Book with ID ${filterBookId} not found`);
    } else {
      setBookItem(filteredBookById);
      setError(null);
    }
  };

  

  const handleDeleteBook = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
  
    fetch(`http://5.22.217.225:8081/api/v1/book/${id}`, requestOptions)
      .then((response) => response.json())
      .then(() => {
        setBookItem((bookItems) => bookItems.filter((bookItem) => bookItem.id !== id));
      })
      .catch((error) => {
        console.error(error);
        setError("This Book can not be Deleted.");
      });
  };
  

return (
  <div>
    <UserProfile />
    <Form>
      <Form.Group controlId="formFilterId">
        <Form.Label> Enter book ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book ID"
          value={filterBookId}
          onChange={(e) => setFilterBookId(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleFilter}
        style={{ marginBottom: "30px" }}
      >
        Filter
      </Button>
    </Form>
    <div className="error">{error}</div>
    
    <NewBook />
      
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Description</th>
          <th>Book Cover</th>
        </tr>
      </thead>
      <tbody>
        {bookItem.map((bookItem) => (
          <tr key={bookItem.id}>
            <td>{bookItem.title}</td>
            <td>{bookItem.year}</td>
            <td>{bookItem.description}</td>
            <td>
              <img
                src={bookItem.book_cover}
                alt={bookItem.title}
                style={{ maxWidth: "20%", height: "auto" }}
              />
            </td>
            <td>
              <UpdateBook />
            </td>
            <td>
              <button onClick={() => handleDeleteBook(bookItem.id)}>
                Delete Book
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  );
}


export default BookList; 