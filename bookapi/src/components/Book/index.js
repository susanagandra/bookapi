import React, { useState, useEffect } from "react";
import { FilterContainer, Button, Label, Input, Container, BookItemContainer, Title, Year, Description, BookCover,
  DeleteButton,
} from "./style";

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

    fetch(
      `http://5.22.217.225:8081/api/v1/book/?sort_by=year&order_by=desc`,
      requestOptions
    )
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
    const filteredBookById = bookItem.filter(
      (book) => book.id === parseInt(filterBookId, 10)
    );

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
        setBookItem((bookItems) =>
          bookItems.filter((bookItem) => bookItem.id !== id)
        );
      })
      .catch((error) => {
        console.error(error);
        setError("This Book cannot be deleted.");
      });
  };

  return (
    <>
      <FilterContainer>
        <Label>Find a book by ID:</Label>
        <Input
          id="filterId"
          type="text"
          placeholder="Book ID"
          value={filterBookId}
          onChange={(e) => setFilterBookId(e.target.value)}
        />
        <Button onClick={handleFilter}>Filter</Button>
      </FilterContainer>

      <Container>
        {bookItem.map((book) => (
          <BookItemContainer key={book.id}>
            <Title>{book.title}</Title>
            <BookCover src={book.book_cover} alt={book.title} />
            <Year>{book.year}</Year>
            <Description><strong>Description:</strong> {book.description}</Description>
            <DeleteButton onClick={() => handleDeleteBook(book.id)}>
              Delete Book
            </DeleteButton>
          </BookItemContainer>
        ))}
      </Container>
    </>
  );
};

export default BookList;
