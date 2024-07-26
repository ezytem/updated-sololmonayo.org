import React from "react";
import "./previouseditions.css";  // Separate CSS for PreviousEditions

const editions = [
  {
    year: 2023,
    title: "1st Edition",
    poster: "/images/previous/pre1.jpg",
  },
  {
    year: 2021,
    title: "2nd Edition",
    poster: "/images/previous/pre4.webp",
  },
  {
    year: 2020,
    title: "3rd Edition",
    poster: "/images/previous/pre3.webp",
  },
  {
    year: 2021,
    title: "4th Edition",
    poster: "/images/previous/pre4.jpg",
  },
  {
    year: 2019,
    title: "5th Edition",
    poster: "/images/previous/pre5.webp",
  },
  {
    year: 2018,
    title: "6th Edition",
    poster: "/images/previous/pre6.webp",
  },
];

const PreviousEditions = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Previous Editions</h1>
        </div>
      </section>
      <section className="previous-editions container">
        {editions.map((edition, index) => (
          <div className="card shadow" key={index}>
            <img src={edition.poster} alt={`${edition.title} poster`} />
            <div className="text">
              <h3>{edition.title}</h3>
              <p>{edition.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default PreviousEditions;
