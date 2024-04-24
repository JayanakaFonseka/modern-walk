import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import CardContext from "../context/cardContext";
import "./Home/Home.css";

const MensClothing = () => {
  const [items, setItems] = useState([]);
  const [cardsPerRow] = useContext(CardContext);

  // fetching data from mens's category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="home-main">
      <div className="flash-container">
        <h2>Men's Clothing</h2>
        <div
          className="card-container"
          style={{ gridTemplateColumns: `repeat(${cardsPerRow}, auto)` }}
        >
          {items.length === 0 ? (
            <Loader />
          ) : (
            items.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default MensClothing;
