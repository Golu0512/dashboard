import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
function App() {
  const products = {
    "id": 1,
    "pimg": "./images/med1.jpg",
    "name": "paracetamol",
    "combination": "anti, biotic",
    "indication": "fever, cold",
    "discription": "jveuaefheevnjvekjbvaeubevbeuubeuia;",
    "mrp": "10"
  };

  const [mode, setMode] = useState("light");
  let [badgeCount, setbadgeCount] = useState(0);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };

  const badgeCounter = () => {
    badgeCount = badgeCount + 1;
    setbadgeCount(badgeCount);
  }

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} itemCount={badgeCount} />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home mode={mode} />} />
            <Route
              exact
              path="/productpage"
              element={
                <ProductPage
                  badgeCounter={badgeCounter}
                  id={products.id}
                  title={products.name}
                  combination={products.combination}
                  discription={products.discription}
                  indication={products.indication}
                  mrp={products.mrp}
                  pimg={products.pimg}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
