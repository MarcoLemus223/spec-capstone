import Header from "./components/Layout/Header";
import MiniHeader from "./components/Layout/MiniHeader";
import Home from "./components/pages/Home";
import MensCard from "./components/UI/MensCard";
import WomensCard from "./components/UI/WomensCard";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Footer from "./components/Layout/Footer";

import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Cart/Wishlist";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const navigate = useNavigate();

  const nav = (location) => {
    navigate(location);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const addToWish = (item) => {
    setWish([...wish, item]);
  };

  return (
    <div className="App">
      <Header />
      <MiniHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mens"
          element={<MensCard addToCart={addToCart} addToWish={addToWish} />}
        />
        <Route
          path="/womens"
          element={<WomensCard addToCart={addToCart} addToWish={addToWish} />}
        />
        <Route path="/login" element={<Login nav={nav} />} />
        <Route path="/signup" element={<Signup nav={nav} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/wishlist" element={<Wishlist wish={wish} setWish={setWish} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
