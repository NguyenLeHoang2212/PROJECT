import "./Buy.css";
import { Form } from "react-bootstrap";
import { TbArrowBack } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import { FcApprove } from "react-icons/fc";
import { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
export default function Buy() {
  const {
    cart,
    changeQty,
    deletepd,
    bill,
    setQuery,
    name,
    setName,
    email,
    setEmail,
    address,
    setAdress,
    phone,
    sendEmail,
    setPhone,
    form,
  } = useContext(AppContext);
  return (
    <div>
      <div className="titless">
        <h1>Nội thất LH</h1>
      </div>
      <div className="buys">
        <Form className="formmm" ref={form} onSubmit={sendEmail}>
          <div class="step">
            <div class="step-sections steps-onepage" step="1">
              <div class="section">
                <div class="section-header">
                  <h2 class="section-title">Thông tin giao hàng</h2>
                </div>
                <p class="section-content-text">
                  Quý khách đã có tài khoản?
                  <Link to="/login">
                    <a>Đăng nhập</a>
                  </Link>
                </p>

                <div class="fieldsetss">
                  <div class="field field-required">
                    <div class="field-input-wrapper">
                      <label class="field-label"></label>
                      <input
                        placeholder="Họ và tên"
                        class="field-input"
                        value={name}
                        type="text"
                        name="name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="field field-required field-two-thirds">
                    <div class="field-input-wrapper">
                      <label class="field-label"></label>
                      <input
                        type="text"
                        placeholder="Email"
                        class="field-input"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="field field-required field-third  ">
                    <div class="field-input-wrapper">
                      <label class="field-label"></label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        class="field-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div class="field field-required  ">
                      <div class="field-input-wrapper">
                        <label class="field-label"></label>
                        <input
                          placeholder="Địa chỉ"
                          class="field-input"
                          value={address}
                          name="address"
                          onChange={(e) => setAdress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-content">
                  <div class="fieldset">
                    <div class="field default">
                      <div class="content-box mt0">
                        <div>
                          <div className="selection">
                            <div class="selects">
                              <div class="select">
                                <label
                                  class="field-label"
                                  for="customer_shipping_province"
                                >
                                  {" "}
                                </label>
                                <select
                                  class="field-inputs"
                                  id="customer_shipping_province"
                                  name="customer_shipping_province"
                                >
                                  <option
                                    data-code="null"
                                    value="null"
                                    selected=""
                                  >
                                    Chọn tỉnh/ thành{" "}
                                  </option>

                                  <option data-code="HC" value="50">
                                    Hồ Chí Minh
                                  </option>

                                  <option data-code="HI" value="1">
                                    Hà Nội
                                  </option>

                                  <option data-code="DA" value="32">
                                    Đà Nẵng
                                  </option>

                                  <option data-code="AG" value="57">
                                    An Giang
                                  </option>

                                  <option data-code="BV" value="49">
                                    Bà Rịa - Vũng Tàu
                                  </option>

                                  <option data-code="BI" value="47">
                                    Bình Dương
                                  </option>

                                  <option data-code="BP" value="45">
                                    Bình Phước
                                  </option>

                                  <option data-code="BU" value="39">
                                    Bình Thuận
                                  </option>

                                  <option data-code="BD" value="35">
                                    Bình Định
                                  </option>

                                  <option data-code="BL" value="62">
                                    Bạc Liêu
                                  </option>

                                  <option data-code="BG" value="15">
                                    Bắc Giang
                                  </option>

                                  <option data-code="BK" value="4">
                                    Bắc Kạn
                                  </option>

                                  <option data-code="BN" value="18">
                                    Bắc Ninh
                                  </option>

                                  <option data-code="BT" value="53">
                                    Bến Tre
                                  </option>

                                  <option data-code="CB" value="3">
                                    Cao Bằng
                                  </option>

                                  <option data-code="CM" value="63">
                                    Cà Mau
                                  </option>

                                  <option data-code="CN" value="59">
                                    Cần Thơ
                                  </option>

                                  <option data-code="GL" value="41">
                                    Gia Lai
                                  </option>

                                  <option data-code="HG" value="2">
                                    Hà Giang
                                  </option>

                                  <option data-code="HM" value="23">
                                    Hà Nam
                                  </option>

                                  <option data-code="HT" value="28">
                                    Hà Tĩnh
                                  </option>

                                  <option data-code="HO" value="11">
                                    Hòa Bình
                                  </option>

                                  <option data-code="HY" value="21">
                                    Hưng Yên
                                  </option>

                                  <option data-code="HD" value="19">
                                    Hải Dương
                                  </option>

                                  <option data-code="HP" value="20">
                                    Hải Phòng
                                  </option>

                                  <option data-code="HU" value="60">
                                    Hậu Giang
                                  </option>

                                  <option data-code="KH" value="37">
                                    Khánh Hòa
                                  </option>

                                  <option data-code="KG" value="58">
                                    Kiên Giang
                                  </option>

                                  <option data-code="KT" value="40">
                                    Kon Tum
                                  </option>

                                  <option data-code="LI" value="8">
                                    Lai Châu
                                  </option>

                                  <option data-code="LA" value="51">
                                    Long An
                                  </option>

                                  <option data-code="LO" value="6">
                                    Lào Cai
                                  </option>

                                  <option data-code="LD" value="44">
                                    Lâm Đồng
                                  </option>

                                  <option data-code="LS" value="13">
                                    Lạng Sơn
                                  </option>

                                  <option data-code="ND" value="24">
                                    Nam Định
                                  </option>

                                  <option data-code="NA" value="27">
                                    Nghệ An
                                  </option>

                                  <option data-code="NB" value="25">
                                    Ninh Bình
                                  </option>

                                  <option data-code="NT" value="38">
                                    Ninh Thuận
                                  </option>

                                  <option data-code="PT" value="16">
                                    Phú Thọ
                                  </option>

                                  <option data-code="PY" value="36">
                                    Phú Yên
                                  </option>

                                  <option data-code="QB" value="29">
                                    Quảng Bình
                                  </option>

                                  <option data-code="QM" value="33">
                                    Quảng Nam
                                  </option>

                                  <option data-code="QG" value="34">
                                    Quảng Ngãi
                                  </option>

                                  <option data-code="QN" value="14">
                                    Quảng Ninh
                                  </option>

                                  <option data-code="QT" value="30">
                                    Quảng Trị
                                  </option>

                                  <option data-code="ST" value="61">
                                    Sóc Trăng
                                  </option>

                                  <option data-code="SL" value="9">
                                    Sơn La
                                  </option>

                                  <option data-code="TH" value="26">
                                    Thanh Hóa
                                  </option>

                                  <option data-code="TB" value="22">
                                    Thái Bình
                                  </option>

                                  <option data-code="TY" value="12">
                                    Thái Nguyên
                                  </option>

                                  <option data-code="TT" value="31">
                                    Thừa Thiên Huế
                                  </option>

                                  <option data-code="TG" value="52">
                                    Tiền Giang
                                  </option>

                                  <option data-code="TV" value="54">
                                    Trà Vinh
                                  </option>

                                  <option data-code="TQ" value="5">
                                    Tuyên Quang
                                  </option>

                                  <option data-code="TN" value="46">
                                    Tây Ninh
                                  </option>

                                  <option data-code="VL" value="55">
                                    Vĩnh Long
                                  </option>

                                  <option data-code="VT" value="17">
                                    Vĩnh Phúc
                                  </option>

                                  <option data-code="YB" value="10">
                                    Yên Bái
                                  </option>

                                  <option data-code="DB" value="7">
                                    Điện Biên
                                  </option>

                                  <option data-code="DC" value="42">
                                    Đắk Lắk
                                  </option>

                                  <option data-code="DO" value="43">
                                    Đắk Nông
                                  </option>

                                  <option data-code="DN" value="48">
                                    Đồng Nai
                                  </option>

                                  <option data-code="DT" value="56">
                                    Đồng Tháp
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="selects">
                              <div class="select">
                                <label
                                  class="field-label"
                                  for="customer_shipping_district"
                                ></label>
                                <select
                                  class="field-inputs"
                                  id="customer_shipping_district"
                                  name="customer_shipping_district"
                                >
                                  <option
                                    data-code="null"
                                    value="null"
                                    selected=""
                                  >
                                    Chọn quận/ huyện{" "}
                                  </option>
                                  <option data-code="HC" value="50">
                                    Quận 1
                                  </option>
                                  <option data-code="HC" value="50">
                                    Quận 2
                                  </option>

                                  <option data-code="HI" value="1">
                                    Quận 3
                                  </option>

                                  <option data-code="DA" value="32">
                                    Quận 4
                                  </option>

                                  <option data-code="AG" value="57">
                                    Quận 5
                                  </option>

                                  <option data-code="BV" value="49">
                                    Quận 6
                                  </option>

                                  <option data-code="BI" value="47">
                                    Quận 7
                                  </option>

                                  <option data-code="BP" value="45">
                                    Quận 8
                                  </option>

                                  <option data-code="BU" value="39">
                                    Quận 9
                                  </option>

                                  <option data-code="BD" value="35">
                                    Quận 10
                                  </option>

                                  <option data-code="BL" value="62">
                                    Quận 11
                                  </option>

                                  <option data-code="BG" value="15">
                                    Quận 12
                                  </option>

                                  <option data-code="BK" value="4">
                                    Quận Thủ Đức
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="selects">
                              <div class="select">
                                <label
                                  class="field-label"
                                  for="customer_shipping_ward"
                                ></label>
                                <select
                                  class="field-inputs"
                                  id="customer_shipping_ward"
                                  name="customer_shipping_ward"
                                >
                                  <option
                                    data-code="null"
                                    value="null"
                                    selected=""
                                  >
                                    Chọn phường/ xã{" "}
                                  </option>
                                  <option data-code="HC" value="50">
                                    Phường 1
                                  </option>
                                  <option data-code="HC" value="50">
                                    Phường 2
                                  </option>

                                  <option data-code="HI" value="1">
                                    Phường 3
                                  </option>

                                  <option data-code="DA" value="32">
                                    Phường 4
                                  </option>

                                  <option data-code="AG" value="57">
                                    Phường 5
                                  </option>

                                  <option data-code="BV" value="49">
                                    Phường 6
                                  </option>

                                  <option data-code="BI" value="47">
                                    Phường 7
                                  </option>

                                  <option data-code="BP" value="45">
                                    Phường 8
                                  </option>

                                  <option data-code="BU" value="39">
                                    Phường 9
                                  </option>

                                  <option data-code="BD" value="35">
                                    Phường 10
                                  </option>

                                  <option data-code="BL" value="62">
                                    Phường 11
                                  </option>

                                  <option data-code="BG" value="15">
                                    Phường 12
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div
                            id="div_location_country_not_vietnam"
                            class="section-customer-information "
                          >
                            <div class="field field-two-thirds">
                              <div class="field-input-wrapper">
                                <label class="field-label">Thành phố</label>
                                <input
                                  placeholder="Thành phố"
                                  class="field-input"
                                  type="text"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="field field-third">
                              <div class="field-input-wrapper">
                                <label class="field-label">Mã bưu chính</label>
                                <input
                                  placeholder="Mã bưu chính"
                                  class="field-input"
                                  type="text"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="change_pick_location_or_shipping">
                  <div id="section-shipping-rate">
                    <div class="order-checkout__loading--box">
                      <div class="order-checkout__loading--circle"></div>
                    </div>
                    <div class="section-header">
                      <h2 class="section-title">Phương thức vận chuyển</h2>
                    </div>
                    <div class="section-content">
                      <div class="radio-wrappers">
                        <label
                          class="radio-label"
                          for="payment_method_id_1002252889"
                        >
                          <div class="radio-input payment-method-checkboxs">
                            <input
                              type-id="9"
                              id="payment_method_id_1002252889"
                              class="input-radios"
                              name="payment_method_ids"
                              type="radio"
                              value="1002252889"
                            />
                          </div>

                          <div className="primary">
                            <span class="radio-label-primary">
                              Vận chuyển trong nước
                            </span>
                            <span class="quick-tagline hidden"></span>
                          </div>
                        </label>
                      </div>
                      <div class="radio-wrappers">
                        <label
                          class="radio-label"
                          for="payment_method_id_1002252889"
                        >
                          <div class="radio-input payment-method-checkboxs">
                            <input
                              type-id="9"
                              id="payment_method_id_1002252889"
                              class="input-radios"
                              name="payment_method_ids"
                              type="radio"
                              value="1002252889"
                            />
                          </div>

                          <div className="primary">
                            <span class="radio-label-primary">
                              Vận chuyển quốc tế
                            </span>
                            <span class="quick-tagline hidden"></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div id="section-payment-method" class="section">
                    <div class="order-checkout__loading--box">
                      <div class="order-checkout__loading--circle"></div>
                    </div>
                    <div class="section-header">
                      <h2 class="section-title">Phương thức thanh toán</h2>
                    </div>
                    <div class="section-content">
                      <div class="content-box">
                        <div class="radio-wrappers">
                          <label
                            class="radio-label"
                            for="payment_method_id_1002252882"
                          >
                            <div class="radio-input payment-method-checkbox">
                              <input
                                type-id="1"
                                id="payment_method_id_1002252882"
                                class="input-radio"
                                name="payment_method_id"
                                type="radio"
                                value="1002252882"
                              />
                            </div>
                            <div class="radio-content-input">
                              <img
                                class="main-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                              />
                            </div>
                            <div className="primary">
                              <span class="radio-label-primary">
                                Thanh toán tiền mặt khi giao hàng (COD)
                              </span>
                              <span class="quick-tagline hidden"></span>
                            </div>
                          </label>
                        </div>

                        <div class="radio-wrappers">
                          <label
                            class="radio-label"
                            for="payment_method_id_1002252884"
                          >
                            <div class="radio-input payment-method-checkbox">
                              <input
                                type-id="2"
                                id="payment_method_id_1002252884"
                                class="input-radio"
                                name="payment_method_id"
                                type="radio"
                                value="1002252884"
                              />
                            </div>
                            <div class="radio-content-input">
                              <img
                                class="main-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                              />
                            </div>
                            <div className="primary">
                              <span class="radio-label-primary">
                                Thanh toán chuyển khoản qua ngân hàng
                              </span>
                              <span class="quick-tagline hidden"></span>
                            </div>
                          </label>
                        </div>

                        <div
                          class="radio-wrapper content-box-row content-box-row-secondary hidden"
                          for="payment_method_id_1002252884"
                        >
                          <div class="blank-slate">
                            Tên tài khoản: Công Ty Cổ Phần Hợp Tác Kinh Tế Và
                            Xuất Nhập Khẩu Savimex Số tài khoản: 0071001303667
                            Ngân hàng: Vietcombank – CN HCM Nội dung: Tên + SĐT
                            đặt hàng
                          </div>
                        </div>

                        <div class="radio-wrappers">
                          <label
                            class="radio-label"
                            for="payment_method_id_1002702616"
                          >
                            <div class="radio-input payment-method-checkbox">
                              <input
                                type-id="4"
                                id="payment_method_id_1002702616"
                                class="input-radio"
                                name="payment_method_id"
                                type="radio"
                                value="1002702616"
                              />
                            </div>
                            <div class="radio-content-input">
                              <img
                                class="main-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                              />
                            </div>
                            <div className="primary">
                              <span class="radio-label-primary">
                                Thanh toán quẹt thẻ khi giao hàng (POS)
                              </span>
                              <span class="quick-tagline hidden"></span>
                            </div>
                          </label>
                        </div>

                        <div
                          class="radio-wrapper content-box-row content-box-row-secondary hidden"
                          for="payment_method_id_1002702616"
                        >
                          <div class="blank-slate">
                            Thanh toán bằng thẻ qua máy POS tại nhà (nhân viên
                            giao hàng sẽ đem theo máy POS) khi giao hàng. Phương
                            thức thanh toán này không áp dụng cho các sản phẩm
                            thuộc danh mục đồ trang trí.
                          </div>
                        </div>

                        <div class="radio-wrappers">
                          <label
                            class="radio-label"
                            for="payment_method_id_1002965960"
                          >
                            <div class="radio-input payment-method-checkbox">
                              <input
                                type-id="8"
                                id="payment_method_id_1002965960"
                                class="input-radio"
                                name="payment_method_id"
                                type="radio"
                                value="1002965960"
                              />
                            </div>
                            <div class="radio-content-input">
                              <img
                                class="main-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=4"
                              />
                            </div>
                            <div className="primary">
                              <div>
                                <span class="radio-label-primary">
                                  Thanh toán online qua cổng VNPay
                                  (ATM/Visa/MasterCard/JCB/QRPay trên Internet
                                  Banking)
                                </span>
                                <span class="quick-tagline hidden"></span>
                              </div>

                              <img
                                class="child-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=4"
                              />
                            </div>
                          </label>
                        </div>

                        <div class="radio-wrappers">
                          <label
                            class="radio-label"
                            for="payment_method_id_1002965974"
                          >
                            <div class="radio-input payment-method-checkbox">
                              <input
                                type-id="21"
                                id="payment_method_id_1002965974"
                                class="input-radio"
                                name="payment_method_id"
                                type="radio"
                                value="1002965974"
                              />
                            </div>
                            <div class="radio-content-input">
                              <img
                                class="main-img"
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=4"
                              />
                            </div>
                            <div className="primary">
                              <span class="radio-label-primary">Ví MoMo</span>
                              <span class="quick-tagline hidden"></span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="step-footer" id="step-footer-checkout">
              <button
                type="submit"
                class="btn-content1"
                onClick={() => {
                  Swal.fire({
                    position: "mid",
                    icon: "success",
                    title: "Đơn hàng được lưu thành công",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              >
                <span>Hoàn tất đơn hàng</span>
              </button>

              <div className="back">
                <a class="step-footer-previous-link" href="/cart">
                  Giỏ hàng
                </a>
              </div>
            </div>
          </div>
        </Form>

        <div className="sidebarss">
          <div className="bagss">
            <div className="tops">
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
                        </div>
                        <div className="priceqty">
                      <div className="qtys">
                        <button
                          onClick={() => {
                            if (item.qty > 1) {
                              changeQty(item.id, -1);
                            }
                          }}
                        >
                          -
                        </button>
                        <div className="countss">
                          <p>{item.qty}</p>
                        </div>

                        <button onClick={() => changeQty(item.id, 1)}>+</button>
                        <HiOutlineTrash
                            className="trash"
                            onClick={() => deletepd(item.id)}
                          />
                      </div>
                      
                   
                          
                          <div> {(item.qty * item.prices).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })} </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <div class="fieldsss">
                <div class="fieldwrapper">
                  <div class="wrapper">
                    <input
                      className="wr"
                      placeholder="Mã giảm giá"
                      type="text"
                      value=""
                    />
                  </div>
                  <button type="submit">
                    <span class="btn-content">Sử dụng</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="displaydiscount">
              <div>
                <div class="coupons">
                  <div>
                    <svg width="15" height="10" viewBox="0 0 18 14" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3337 5.3335V2.00016C17.3337 1.07516 16.5837 0.333496 15.667 0.333496H2.33366C1.41699 0.333496 0.675326 1.07516 0.675326 2.00016V5.3335C1.59199 5.3335 2.33366 6.0835 2.33366 7.00016C2.33366 7.91683 1.59199 8.66683 0.666992 8.66683V12.0002C0.666992 12.9168 1.41699 13.6668 2.33366 13.6668H15.667C16.5837 13.6668 17.3337 12.9168 17.3337 12.0002V8.66683C16.417 8.66683 15.667 7.91683 15.667 7.00016C15.667 6.0835 16.417 5.3335 17.3337 5.3335ZM15.667 4.11683C14.6753 4.69183 14.0003 5.77516 14.0003 7.00016C14.0003 8.22516 14.6753 9.3085 15.667 9.8835V12.0002H2.33366V9.8835C3.32533 9.3085 4.00033 8.22516 4.00033 7.00016C4.00033 5.76683 3.33366 4.69183 2.34199 4.11683L2.33366 2.00016H15.667V4.11683ZM9.83366 9.50016H8.16699V11.1668H9.83366V9.50016ZM8.16699 6.16683H9.83366V7.8335H8.16699V6.16683ZM9.83366 2.8335H8.16699V4.50016H9.83366V2.8335Z"
                        fill="#318DBB"
                      ></path>
                    </svg>
                    <span>Xem thêm mã giảm giá</span>
                  </div>
                  <div id="listcoupon">
                    <p>Giảm 500,000₫</p>

                    <p>Giảm 300,000₫</p>

                    <p>Giảm 200,000₫</p>
                    <p>Giảm 50,000₫</p>

                    <p>Giảm 100,000₫</p>
                  </div>
                </div>
              </div>
              <span class="checkout">
                Lưu ý: Không áp dụng đồng thời 2 chương trình khuyến mãi
              </span>
            </div>
            <div class="login">
              <div class="logintitle">
                <h2>Khách hàng thân thiết</h2>
              </div>

              <div class="loginbtn">
                <Link to="/login">
                  <a>
                    <button> Đăng nhập</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="inforprice">
              <div className="sum">Tổng tiền :</div>
              <div className="bill"> {" "}
              {bill.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
