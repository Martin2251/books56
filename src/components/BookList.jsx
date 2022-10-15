import React from "react";
import "../App";
import { API_URL } from ''../API';
import { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      console.log(res.data)
      setBooks(res.data)
    }).catch(err => console.log(err));
  },[]);

  return <div className="book-list">BookList</div>;
};

export default BookList;
