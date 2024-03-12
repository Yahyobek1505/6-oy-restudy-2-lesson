import React from "react";
import './index.css'
import img from "../../assets/book.jpg";
function Card(props) {
  const { avtor, country, language, pages, title, year } = props.book;
  return (
    <>
      <div className="card-wrapper">
          <img src={img} alt="rasm" />
          <h1>{title}</h1>
          <h3>{country}</h3>
          <h4>{language}</h4>
          <h2>{avtor}</h2>
          <a href="https://en.wikipedia.org/wiki/Things_Fall_Apart">
            More info
          </a>
          <p>{pages}</p>
          <span>{year > 1950 ? "new" : "old"}</span>
      </div>
    </>
  );
}

export default Card;
