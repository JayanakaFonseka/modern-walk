import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import CardContext from "../../context/cardContext";
import "./Home.css";

const Home = () => {
  const [flashSaleItems, setFlashSaleItems] = useState([]);
  const [cardsPerRow, cardSize] = useContext(CardContext);

  // fetching data with a limit of cards per row for flash sale
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=" + cardsPerRow)
      .then((res) => res.json())
      .then((json) => {
        setFlashSaleItems(json);
      });
  }, []);

  return (
    <div className="home-main">
      <div className="flash-container">
        <h2>Flash Sale</h2>
        <div
          className="card-container"
          style={{ gridTemplateColumns: `repeat(${cardsPerRow}, auto)` }}
        >
          {/* displaying a loader while data is fetching */}
          {flashSaleItems.length === 0 ? (
            <Loader />
          ) : (
            flashSaleItems?.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
      </div>
      <div className="category-container">
        <h2>Categories</h2>
        <div className="link-container">
          <Link
            to="/mens-clothing"
            className="link"
            style={{ backgroundColor: "#2BD9AF" }}
          >
            Men's Clothing
          </Link>
          <Link
            to="/womens-clothing"
            className="link"
            style={{ backgroundColor: "#FF5E84" }}
          >
            Women's Clothing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
