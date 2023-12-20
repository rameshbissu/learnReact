/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/book.jpg",
};
const SecondBook = {
  author: "Raghuram Rajan",
  title: "Breaking the Mould : Reimagining India's Economic Future",
  img: "https://m.media-amazon.com/images/I/71DEKXIsW8L._SY342_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={SecondBook.author}
        title={SecondBook.title}
        img={SecondBook.img}
      />
    </section>
  );
};
const Book = ({ img, title, author }) => {
  // console.log(props);
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
