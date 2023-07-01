import React from "react";
import Mid from "./Pages/Mid/Mid";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Bot from "./Pages/Bot/Bot";
import Home from "./Pages/Home/Home";
import { AppProvider } from "./Components/AppContext/AppContext";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Room1 from "./Pages/Product/Room1";
import Room2 from "./Pages/Product/Room2";
import Room3 from "./Pages/Product/Room3";
import DetailProduct from "./Pages/Product/DetailProduct";
import Buy from "./Pages/Buy/Buy";
import Login from "./Pages/Login/Login";
import AllProduct from "./Pages/Product/AllProduct";

// import DetailProduct from "./Pages/Product/DetailProduct";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Mid />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/allpd" element={<AllProduct />}></Route>
          <Route path="/detailproduct" element={<DetailProduct />}></Route>
          <Route path="/room1" element={<Room1 />}></Route>
          <Route path="/room2" element={<Room2 />}></Route>
          <Route path="/room3" element={<Room3 />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
        <Bot />
      </AppProvider>
    </div>
  );
}

export default App;
