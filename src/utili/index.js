import React, { useState, useEffect } from "react";
import BookList from "../book";

const UpdateBook = () => {
    const [error, setError] = useState(null);
    const [bookItem, setBookItem] = useState([]);
    const [bookTitle, setBookTitle] = useState("");
    const [bookYear, setBookYear] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookCover, setBookCover] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      };

    fetch(`http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBookItem(data.data);  
        setBookTitle(data.data.title);
        setBookYear(data.data.year);
        setBookDescription(data.data.description);
        setBookCover(data.data.book_cover);
        setIsUpdating(false);    
      })

      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the profile.");
      });
  

    return (
        <div style={{ display: "flex", marginLeft: "20px" }}>
          {!isUpdating && (
          <button style={{ backgroundColor: "blue", color:"white" }} onClick={() => setIsUpdating(true)}>Update Book</button>
          )}
          {isUpdating && (
            <div>
              <div> Title <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} /></div>
              <div> Year <input type="text" value={bookYear} onChange={(e) => setBookYear(e.target.value)} /> </div>
              <div> Description <input type="text" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} /> </div>
              <div> Book Cover <input type="img" value={bookCover} onChange={(e) => setBookCover(e.target.value)} /> </div>
              <button style={{ backgroundColor: "blue", color:"white" }} onClick={<UpdateBook />}>Save</button>
              <button style={{ backgroundColor: "red", color:"white" }}onClick={() => setIsUpdating(false)}>Cancel</button>
        </div>
        )}      
        </div>
  )
 };


  export default UpdateBook;