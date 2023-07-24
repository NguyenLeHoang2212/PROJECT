import { useContext } from "react";
import swal from "sweetalert";
import "./BedRoom.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import DetailProduct from "./DetailProduct";
import React from "react";
import { Animated } from "react-animated-css";
import { AppContext } from "../../Components/AppContext/AppContext";

export default function BedRoom() {
  const {
    dataBed,
    setBed,
    addCart,
    data,
    handle_product,
    img,
    setImg,
    curr,
    setCurr,
  } = useContext(AppContext);
  return (
    <div id="products">
      {dataBed.map((item, index) => {
        return (
          <div className="product2" key={index} data-aos="fade-left">
            <div class="list">
              <div class="product">
                <div class="img_product">
                  <Link
                    to="/detailproduct"
                    onClick={() => {
                      handle_product(item.id);
                      setImg(item.img[0]);
                    }}
                  >
                    <img src={item.img[0]} />
                  </Link>
                  <button
                    class="add"
                    title="Thêm vào giỏ"
                    onClick={() => {
                      addCart(item.id);

                      swal({
                        title: "Mua thành công !",

                        icon: "success",
                        button: "Đóng",
                      });
                    }}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="box">
                  <div className="name">
                    <a>
                      <h4>{item.name}</h4>
                    </a>
                  </div>

                  <div className="pricebox">
                    <span className="specialprice">
                      <span className="prices">
                        {item.prices.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </span>
                    <span className="oldprice">
                      <span className="prices">
                        {item.oldprice.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
