import React from "react";
import "../App";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BOOK_DETAILS_URL } from "../API";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(
    () =>
      axios
        .get(`${BOOK_DETAILS_URL}/${id}`)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => console.log(err)),
    [id]
  );
  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2> <img src={book?.image_url} alt="hi" />
      </div>
      <div className="book-desc">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Generes</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
