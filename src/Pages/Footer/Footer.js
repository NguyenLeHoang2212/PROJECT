import React from "react";
import { SiZalo } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { ImLocation } from "react-icons/im";

import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <div className="Box">
        <h1
          style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
        ></h1>
        <Container>
          <Row>
            <Column>
              <Heading>NỘI THẤT LH</Heading>
              <p>
                Nội Thất LH là thương hiệu đến từ Savimex với gần 40 năm kinh
                nghiệm trong việc sản xuất và xuất khẩu nội thất đạt chuẩn quốc
                tế.
              </p>
            </Column>
            <Column>
              <Heading>DỊCH VỤ</Heading>
              <p>Chính Sách Bán Hàng</p>
              <p>Chính Sách Giao Hàng & Lắp Đặt</p>
              <p>Chính Sách Đổi Trả</p>
              <p>Chính Sách Bảo Hành & Bảo Trì</p>
            </Column>
            <Column>
              <Heading className="infor">THÔNG TIN LIÊN HỆ</Heading>
              <div className="address">
                <ImLocation className="icon" />
                <p>486/27CMT8,P8,Q5,HCM</p>
              </div>{" "}
              <br></br>
              <div className="phone">
                <GiRotaryPhone className="icon" />
                <p>0374509272</p>
              </div>
              <br></br>
              <div className="mail">
                <CgMail className="icon" />
                <p>bom19992212@gmail.com</p>
              </div>
            </Column>
            <Column>
              <Heading>TRUYỀN THÔNG</Heading>
              <div className="media">
                <AiFillFacebook className="icon" />
                <p>Facebook</p>
              </div>
              <div className="media">
                <BsMessenger className="icon" />
                <p>Messenger</p>
              </div>
              <div className="media">
                <SiZalo className="icon" />
                <p>Zalo</p>
              </div>
              <div className="media">
                <BsYoutube className="icon" />
                <p>Youtube</p>
              </div>
            </Column>
          </Row>
        </Container>
      </div>
    </Box>
  );
};
export default Footer;
