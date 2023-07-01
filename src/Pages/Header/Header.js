import "./Header.css";

import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { lists } from "../../Components/API/API";
import Table from "./Table";
// import required modules
import { Animated } from "react-animated-css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import g1 from "./g1.jpg";
import g2 from "./g2.jpg";
import g3 from "./g3.jpg";
import g4 from "./g4.jpg";
import axios from "axios";
import { useEffect } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";

export default function Header() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const { cart, changeQty, deletepd, data, setData, setQuery, Search } =
    useContext(AppContext);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
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
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      <div className="header">
        <div className="headerlogo" data-aos="fade-right">
          <div className="searchs">
            <div className="iconsearch">
              <input
                className="search"
                placeholder="Tìm kiếm ..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />

              <BsSearch className="searchicon" />
            </div>
            <div className="tables">{<Table data={data} />}</div>
          </div>

          <div className="logo">
            <Link to="/">
              <img className="logoimg" src={logo} />
            </Link>
          </div>

          <div className="shopss">
            <div className="shop">
              <div className="countt">
                <p>{cart.length}</p>
              </div>

              <Link to="/cart">
                <AiOutlineShoppingCart className="iconshop" />
              </Link>
            </div>
            <Link to="/login">
              <FaUserTie className="iconshops" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div class="navbar">
        <div className="menu" data-aos="zoom-in">
          <a href="/">Trang chủ</a>

          <div class="dropdown">
            <button class="dropbtn">
              Sản phẩm
              <BsCaretDown />
            </button>
            <div class="dropdown-content">
              <div className="livings">
                <a href="/livingroom">Phòng khách</a>
                <div className="livingr">
                  <a href="/bancafe">Bàn cafe</a>
                  <a href="/sofa">Sofa</a>
                </div>
              </div>
              <div className="beds">
                <a href="/bedroom">Phòng ngủ</a>
                <div className="bedr">
                  <a href="/bancafe">Tủ quần áo</a>
                  <a href="/sofa">Giường</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#news">Tin tức</a>
          <a href="/contact">Liên hệ</a>
        </div>
      </div> */}
      <div className="mn">
        <div class="nav">
          <input
            type="checkbox"
            className="nav__input"
            name=""
            id="nav__input"
          />
          <nav class="nav__pc">
            <ul class="nav__list">
              <li>
                <Link to="/" class="nav__link">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/allpd" id="dropbtn" class="nav__link">
                  Sản phẩm
                  <div class="dropdown-content">
                    <a href="#livingroom">Phòng khách</a>
                    <a href="bedroom">Phòng ngủ</a>
                  </div>
                </Link>
              </li>

              <li>
                <a href="#newwss" class="nav__link">
                  Tin tức
                </a>
              </li>
              <li>
                <Link to="/contact" class="nav__link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
          <label for="nav__input" class="nav__bar-btn">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="svg-inline--fa fa-bars fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </label>
          <label for="nav__input" class="nav__overlay"></label>
          <nav class="nav__mobile">
            <div className="logomb">
              <img className="logoimg" src={logo} />
            </div>
            <ul class="nav__mobile-list">
              <li>
                <Link to="/" class="nav__link">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/allpd" class="nav__link">
                  Sản phẩm
                </Link>
              </li>

              <li>
                <a href="#news" class="nav__link">
                  Tin tức
                </a>
              </li>
              <li>
                <Link to="/contact" class="nav__link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <label for="nav__input" class="nav__mobile-btn">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                class="svg-inline--fa fa-times fa-w-11"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </label>
          </nav>
        </div>
        <div className="logomobile">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}
