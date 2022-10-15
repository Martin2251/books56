import React from "react";
import "../App";
import { API_URL } from "../API";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const BookList = ({id, title}) => {
  const [books, setBooks] = useState([]);

  const { favourites, addToFavourites,removeFromFavourites} = useAppContext();

  console.log(favourites)
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div><img src={book.image_url} alt="3"></img></div>
          <div><button onClick={() => addToFavourites(book)}>Add to favourites</button></div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
