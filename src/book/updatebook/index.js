import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateBook = () => {
  const [error, setError] = useState(null);
  const [bookItem, setBookItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [book_cover, setBookCover] = useState("");
  const token = sessionStorage.getItem("token");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdateBook = (id) => {
    
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        title: title,
        year: year,
        description: description,
        book_cover: book_cover,
      }),
    };

    fetch(`http://5.22.217.225:8081/api/v1/book/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBookItem(data.data);
        setTitle(data.data.title);
        setYear(data.data.year);
        setDescription(data.data.description);
        setBookCover(data.data.book_cover);
        handleCloseModal();
        window.location.reload(); // Refreshes the page to show the updated book
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the book.");
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Update Book
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateBook}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBookCover">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control
                type="url"
                rows={3}
                placeholder="Book cover"
                value={book_cover}
                onChange={(e) => setBookCover(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>{" "}
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateBook;
