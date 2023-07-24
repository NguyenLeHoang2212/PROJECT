import { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import { FcApprove } from "react-icons/fc";

import { Card } from "react-bootstrap";
import Header from "../Header/Header";
import "./Cart.css";
export default function Cart() {
  const { cart, changeQty, deletepd, bill } = useContext(AppContext);

  return (
    <div className="bags">
      <div className="titlebag">
        <h1>Giỏ hàng của bạn</h1>
      </div>
      <h2>Có {cart.length} sản phẩm trong giỏ hàng </h2>
      <div className="bag">
        <div className="top">
          {cart &&
            cart.map((item, index) => (
              <div>
                <div className="details">
                  <div className="leftimg">
                    <Card.Img
                      className="lfimg"
                      variant="top"
                      src={item.img[0]}
                    />
                  </div>
                  <div className="detail">
                    <div className="names">
                      <h3>{item.name}</h3>

                      <HiOutlineTrash
                        className="trash"
                        onClick={() => deletepd(item.id)}
                      />
                    </div>

                    <div className="priceqty">
                      <div className="qty">
                        <button
                          onClick={() => {
                            if (item.qty > 1) {
                              changeQty(item.id, -1);
                            }
                          }}
                        >
                          -
                        </button>
                        <div className="count">
                          <p>{item.qty}</p>
                        </div>

                        <button onClick={() => changeQty(item.id, 1)}>+</button>
                      </div>
                      <div>
                        {(item.qty * item.prices).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                    <span>
                      {item.prices.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="inforoder">
          <h2>Thông tin đơn hàng</h2>
          <div className="inforprice">
            <div className="sum">Tổng tiền :</div>
            <div className="bill">
              {" "}
              {bill.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </div>
          </div>
          <Link to="/buy">
            <a>
              <button>Thanh toán</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="bots">
        <div className="note">
          <h3>Ghi chú đơn hàng</h3>
          <input type="text" className="text"></input>
        </div>

        <div class="inforbh">
          <div className="continue">
            <p>
              <a href="/">
                <TbArrowBack /> Tiếp tục mua hàng
              </a>
            </p>
          </div>
          <p>
            <FcApprove /> Miễn phí giao hàng &amp; lắp đặt tại tất cả quận huyện
            thuộc TP.HCM, Hà Nội, Khu đô thị Ecopark, Biên Hòa và một số quận
            thuộc Bình Dương (*)
          </p>
          <p>
            <FcApprove /> Miễn phí 1 đổi 1 - Bảo hành 2 năm - Bảo trì trọn đời
            (**)
          </p>
          <p>
            <FcApprove /> Nhập mã ưu đãi{" "}
            <strong>LH50K, MOHO100K, LH200K, LH300K, LH500K</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
