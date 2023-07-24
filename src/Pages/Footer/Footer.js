import React from "react";

import { BsMessenger } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { ImLocation } from "react-icons/im";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="service">
        <h3>DỊCH VỤ</h3>
        <a>
          <h4>Chính Sách Bán Hàng</h4>
        </a>
        <a>
          <h4>Chính Sách Giao Hàng & Lắp Đặt</h4>
        </a>
        <a>
          <h4>Chính Sách Đổi Trả</h4>
        </a>
        <a>
          <h4>Chính Sách Bảo Hành & Bảo Trì</h4>
        </a>
      </div>

      <div className="infor">
        <h3>THÔNG TIN LIÊN HỆ</h3>
        <div className="address">
          <ImLocation className="icon" />
          <p>486/27CMT8,P11,Q3,HCM</p>
        </div>{" "}
        <br></br>
        <div className="phone">
          <GiRotaryPhone className="icon" />
          <p>0374509271</p>
        </div>
        <br></br>
        <div className="mail">
          <CgMail className="icon" />
          <p>hoang19992212@gmail.com</p>
        </div>
      </div>
      <div className="medias">
        <h3>TRUYỀN THÔNG</h3>
        <div className="media">
          <AiFillFacebook className="icon" />
          <p>Facebook</p>
        </div>
        <div className="media">
          <BsMessenger className="icon" />
          <p>Messenger</p>
        </div>

        <div className="media">
          <BsYoutube className="icon" />
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
