import React from "react";

function Book(props) {
  return (
    <div className="bookArea" onClick={props.onClick}>
      <img
        className="book-image"
        alt="book"
        src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41ON8hhFmxL._SX383_BO1,204,203,200_.jpg"
      />
      <p>Concentrate on a question and tap the book.</p>
    </div>
  );
}

export default Book;
