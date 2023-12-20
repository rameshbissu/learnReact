/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/book.jpg",
    id: 1,
  },
  {
    author: "Raghuram Rajan",
    title: "Breaking the Mould : Reimagining India's Economic Future",
    img: "https://m.media-amazon.com/images/I/71DEKXIsW8L._SY342_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

// click events...
const EventExample = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle Button click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // alert(props);
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
