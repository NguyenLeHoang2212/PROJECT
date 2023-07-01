import React, { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import "./DetailProduct.css";
import ReactImageMagnify from "react-image-magnify";

const DetailProduct = () => {
  const {
    curr,
    handle_addCart,
    img,
    data,
    addCart,
    changeQty2,
    sum_bill,
    handle_hover,
  } = useContext(AppContext);
  return (
    <div className="SingleProduct">
      <h1>Chi tiết sản phẩm</h1>
      <Container fluid="lg">
        <div className="head-page">
          <Link className="head-icon" to="/">
            <AiOutlineHome />
          </Link>
        </div>
      </Container>
      <Container fluid="lg" className="grid-single">
        <div className="picture-chain">
          {curr.img.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt=""
                onMouseOver={() => handle_hover(image, index)}
              />
            );
          })}
        </div>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Pizza",
              isFluidWidth: true,
              src: img,
            },
            largeImage: {
              src: img,
              width: 1500,
              height: 1000,
            },
            enlargedImageContainerDimensions: {
              width: "100%",
              height: "100%",
            },
          }}
        />
        <div className="SingleProduct-info">
          <h1 className="SingleProduct-heading">{curr.name}</h1>
          <div className="grid-info">
            <div class="pro-short-desc">
              <p>
                <strong>Kích thước</strong>: Dài 56cm x Rộng 42cm x Cao 92-106cm
              </p>
              <p>
                <strong>Chất liệu</strong>:
              </p>
              <p>- Khung ghế: nhựa cao cấp</p>
              <p>- Tựa lưng và nệm ghế: vải lưới mềm mại thoáng khí</p>
              <p>- Chân ghế: chân xoay inox cao cấp</p>
              <p>
                <span>
                  <span>
                    <span>🎁&nbsp;</span>
                  </span>
                  Ưu đãi 5% khi mua bất kỳ 02 sản phẩm khác nhau thuộc danh mục
                  bất kỳ
                </span>
              </p>
            </div>
          </div>
          <p className="SingleProduct-pricing">
            {(curr.qty * curr.prices).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <div className="SingleProduct-prices">
            <div className="qty">
              <button
                onClick={() => {
                  if (curr.qty > 1) {
                    changeQty2(curr.id, -1);
                  }
                }}
              >
                -
              </button>
              <div className="count">
                <p>{curr.qty}</p>
              </div>

              <button onClick={() => changeQty2(curr.id, 1)}>+</button>
            </div>
          </div>
          <button
            className="SingleProduct-btn"
            onClick={() => {
              addCart(curr.id);
              sum_bill();
              swal({
                title: "Mua thành công !",

                icon: "success",
                button: "Đóng",
              });
            }}
            alt=""
          >
            Thêm vào giỏ
          </button>
          <Link to="/buy">
            <a>
              <button className="tt">Thanh toán</button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default DetailProduct;
