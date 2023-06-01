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
        <Nav.Link className="header-nav-link">Trang chủ</Nav.Link>
        <NavDropdown className="product" title="Sản phẩm">
          <NavDropdown.Item className="livingroom">
            <Link to="/livingroom" className=" dropdown-link">
              <NavDropdown className="livingroom" title="Phòng khách">
                <NavDropdown.Item className="livingroom">
                  <Link to="/sofa" className=" dropdown-link">
                    Ghế sofa bộ
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/tivi" className=" dropdown-link">
                    Tivi
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="bedroom">
            <Link to="/bedroom" className=" dropdown-link">
              <NavDropdown className="bedroom" title="Phòng ngủ">
                <NavDropdown.Item className="bedroom">
                  <Link to="/sofabed" className=" dropdown-link">
                    Sofa giường
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/bed" className=" dropdown-link">
                    Giường ngủ
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="header-nav-link" href="#news">
          Tin tức
        </Nav.Link>
        <Nav.Link className="header-nav-link" href="#contact">
          Liên hệ
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Header;
