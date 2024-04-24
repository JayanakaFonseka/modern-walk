import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MensClothing from "./pages/MensClothing";
import WomensClothing from "./pages/WomensClothing";
import CardContext from "./context/cardContext";
import "./App.css";

const App = () => {
  // number of cards per row and card size can be modified as needed
  // matching values (3-500, 4-400, 5-300)
  const cardsPerRow = 4;
  const [cardSize, setCardSize] = useState(400);

  return (
    <div>
      <Router>
        <Header />
        {/* setting main viewport height to screen height */}
        <div className="main" style={{ minHeight: window.outerHeight - 240 }}>
          <CardContext.Provider value={[cardsPerRow, cardSize, setCardSize]}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/mens-clothing" element={<MensClothing />} />
              <Route
                exact
                path="/womens-clothing"
                element={<WomensClothing />}
              />
            </Routes>
          </CardContext.Provider>
        </div>
      </Router>
    </div>
  );
};

export default App;
