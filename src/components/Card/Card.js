import React, { useContext, useEffect, useState } from "react";
import CardContext from "../../context/cardContext";
import "./Card.css";

const Card = ({ item }) => {
  const [cardsPerRow, cardSize, setCardSize] = useContext(CardContext);

  //resizing cards for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setCardSize(window.innerWidth / cardsPerRow - 105);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card" style={{ width: cardSize }}>
      <text className="title">{item.title}</text>
      <div
        className="image-container"
        style={{
          width: cardSize,
        }}
      >
        <img className="image" src={item.image} alt={item.title} />
      </div>
      <div
        className="description-container"
        style={{
          width: cardSize,
          backgroundColor:
            item.category === "men's clothing" ? "#2BD9AF" : "#FF5E84",
        }}
      >
        <text className="price-text">Rs {item.price}</text>
        <text className="description-text">{item.description}</text>
      </div>
    </div>
  );
};

export default Card;
