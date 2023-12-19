/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91bYsX41DVL._SY342_.jpg"
    alt="Atomic Habits"
  />
);
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  return <h4>James Clear</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
