import { useContext } from "react";
import swal from "sweetalert";

import "./LivingRoom.css";
import Header from "../Header/Header";

import { Link } from "react-router-dom";
import DetailProduct from "./DetailProduct";

import { AppContext } from "../../Components/AppContext/AppContext";


export default function LivingRoom() {
  const { dataLiving, setLiving, addCart, data, handle_product, setImg, img } =
    useContext(AppContext);
  return (
    <div id="products">
      {dataLiving.map((item, index) => {
        return (
          <div className="product1" key={index} data-aos="fade-right">
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
