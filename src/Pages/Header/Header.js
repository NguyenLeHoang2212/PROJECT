import "./Header.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { SiZalo } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import g1 from "./g1.jpg";
import g2 from "./g2.jpg";
import g3 from "./g3.jpg";
import g4 from "./g4.jpg";
import g5 from "./g5.jpg";
import g6 from "./g6.jpg";
import g7 from "./g7.jpg";
import g8 from "./g8.jpg";
import g9 from "./g9.jpg";
import g10 from "./g10.jpg";
import g11 from "./g11.jpg";
import g12 from "./g12.jpg";
import g13 from "./g13.jpg";
import g14 from "./g14.jpg";

const Header = () => {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img className="logo" src={g1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g3} />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img className="logo" src={g4} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g5} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g6} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g7} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g8} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g9} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g10} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g11} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g12} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g13} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="logo" src={g14} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="header">
        <div className="header-logo">
          <div className="input">
            <input className="ip" type="text" placeholder="search" />

            <BsSearch className="search" />
          </div>

          <div>
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </div>
          <FcShop className="shop" />
        </div>
      </div>
      <Nav className="menu">
        <Nav.Link className="header-nav-link">Home</Nav.Link>
        <NavDropdown title="Menu">
          <NavDropdown.Item>
            <Link to="/tradpizza" className=" dropdown-link">
              2
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/seapizza" className=" dropdown-link">
              3
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/mixedpizza" className=" dropdown-link">
              4
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="header-nav-link" href="#news">
          News
        </Nav.Link>
        <Nav.Link className="header-nav-link" href="#contact">
          Contact
        </Nav.Link>
      </Nav>
      <div className="icons">
        <SiZalo className="icon" /> <br></br>
        <BsMessenger className="icon" />
        <br></br>
        <BsTelephone className="icon" />
      </div>
    </div>
  );
};

export default Header;
