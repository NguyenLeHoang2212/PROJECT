import "./Mid.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import lehoang from "./lehoang.jpg";
import vantu from "./nguyentu.jpg";
import thekha from "./thekha.jpg";
import tanthanh from "./tanthanh.jpg";
// Import Swiper styles
import r1 from "./r1.jpg";
import r2 from "./r2.jpg";
import r3 from "./r3.jpg";
import qc1 from "./qc1.jpg";
import qc2 from "./qc2.jpg";
import qc3 from "./qc3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//npm install react-slideshow-image -S
// import required modules
import {
  Keyboard,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";

import LivingRoom from "../Product/LivingRoom";
import BedRoom from "../Product/BedRoom";
import Slides from "../Slides/Slides";
export default function Mid() {
  const { dataHot, setHot } = useContext(AppContext);

  return (
    <div className="mid">
      <div class="containerr">
        <section class="cate-pro">
          <div>
            <div class="roww">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 cols">
                <a href="#" class="tl" title="Quảng cáo bàn ghế">
                  <p class="ttt">Quảng cáo bàn ghế</p>
                  <picture>
                    <source media="(min-width: 1200px)" />
                    <source media="(min-width: 992px)" />
                    <source media="(min-width: 569px)" />
                    <source media="(min-width: 480px)" />
                    <img alt="Quảng cáo bàn ghế" src={qc1} />
                  </picture>
                </a>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 cols">
                <a href="#" class="tl" title="Quảng cáo phòng ngủ">
                  <p class="ttt">Quảng cáo phòng ngủ</p>
                  <picture>
                    <source media="(min-width: 1200px)" />
                    <source media="(min-width: 992px)" />
                    <source media="(min-width: 569px)" />
                    <source media="(min-width: 480px)" />
                    <img alt="Quảng cáo phòng ngủ" src={qc2} />
                  </picture>
                </a>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 cols">
                <a href="#" class="tl" title="Quảng cáo phòng khách">
                  <p class="ttt">Quảng cáo phòng khách</p>
                  <picture>
                    <source media="(min-width: 1200px)" />
                    <source media="(min-width: 992px)" />
                    <source media="(min-width: 569px)" />
                    <source media="(min-width: 480px)" />
                    <img alt="Quảng cáo phòng khách" src={qc3} />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="onmid" data-aos="flip-up">
        <div class="new_title text-center">
          <h2 class="" title="Sản phẩm bán chạy">
            Sản phẩm bán chạy
          </h2>
        </div>

        <div className="slider">
          <Slides />
        </div>
      </div>
      <div className="mid1">
        <div class="blog-title new_title lt">
          <h2 class="">
            <a title="Tin tức liên quan">
              <span href="#livingroom">Phòng khách</span>
            </a>
          </h2>
        </div>
        <LivingRoom />
      </div>
      <div className="mid2">
        <div class="blog-title new_title lt">
          <h2 class="">
            <a title="Tin tức liên quan">
              <span href="#bedroom">Phòng ngủ</span>
            </a>
          </h2>
        </div>
        <BedRoom />
      </div>

      <div
        className="mid3"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <div className="new" id="newwss">
          <div class="blog-title new_title lt">
            <h2 class="">
              <a title="Tin tức liên quan">
                <span>Tin tức mới</span>
              </a>
            </h2>
          </div>
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
            className="mySwiperssss"
          >
            <SwiperSlide>
              {" "}
              <Link to="/room3">
                <img
                  class="room"
                  src={r3}
                  alt="Phòng thay đồ (Closet) trong nhà – Không gian sống nên có của phụ nữ hiện đại"
                />
                <div className="blog">
                  <h3>
                    Phòng thay đồ (Closet) trong nhà – Không gian sống nên có
                    của phụ nữ hiện đại
                  </h3>
                  <p class="text">
                    <span>
                      Vì vậy trong mỗi căn nhà, khi mọi gian phòng đều mang
                      những công năng riêng, phục vụ cho cuộc sống của cả gia
                      đình, hãy dành lấy một phần không gian...
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/room2">
                <img
                  class="room"
                  src={r2}
                  alt="Thiết kế phòng khách tinh tế và sang trọng"
                />
                <div className="blog">
                  <h3>Thiết kế phòng khách tinh tế và sang trọng</h3>
                  <p class="text">
                    <span>
                      Với bề dày kinh nghiệm từ việc thiết kế, thi công hàng
                      nghìn công trình nội thất biệt thự, nhà phố, căn hộ chung
                      cư cao cấp, cùng sự cập nhật liên tục các phong...
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Link to="/room1">
                <img
                  class="room"
                  src={r1}
                  alt="Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm"
                />
                <div className="blog">
                  <h3>
                    Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm
                  </h3>
                  <p class="text">
                    <span>
                      Sau một năm sử dụng, những vật dụng trong phòng ngủ sẽ ít
                      nhiều bị cũ đi, hư hỏng hoặc đơn giản là “không còn đẹp”.
                      Và nếu có điều kiện, bạn nên thay thế chúng bằng...
                    </span>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="comments">
          <div class="blog-title new_title lt">
            <h2 class="">
              <a title="Tin tức liên quan">
                <span>Bình luận</span>
              </a>
            </h2>
          </div>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwipersss"
          >
            <SwiperSlide>
              {" "}
              <div className="content">
                <div class="group">
                  <div>
                    <img alt="Lê Hoàng" src={lehoang} />
                  </div>
                  <p class="name">Bờm</p>
                </div>
                <p>
                  Không gian gia đình thật sự càng tuyệt với sau khi được tư vấn
                  và sắp đặt các loại cây xanh từ LH. Chúc lê hoàng phát triển
                  mạnh mẽ hơn nữa và sớm trở thành nơi khởi nguồn không gian
                  xanh lớn nhất Việt Nam, tôi tin chắc điều đó.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="content">
                <div class="group">
                  <div>
                    <img alt="Thế Kha" src={thekha} />
                  </div>
                  <p class="name">Thế Kha</p>
                </div>
                <p>
                  Các bạn phục vụ ở LH Coffee rất nhiệt tình và vui tính. Đồng
                  uống đa dạng lại có thêm các món ăn nhanh thích hợp để mình
                  cũng các bạn tụ tập cuối tuần thư giãn tại đây. Chúc LH Coffee
                  phát triển hơn nữa nhé.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="content">
                <div class="group">
                  <div>
                    <img alt="Văn Tú" src={vantu} />
                  </div>
                  <p class="name">Văn Tú</p>
                </div>
                <p>
                  Mình chọn LH Coffee để làm điểm gặp gỡ các bạn thân, đồng
                  nghiệp. Ở đây đồ uống rất được và mang lại một không gian gần
                  gũi. Hy vọng các bạn sẽ phát triển và có nhiều style khác đặc
                  biệt trong không gian của các bạn.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="content">
                <div class="group">
                  <div>
                    <img alt="Tấn Thành" src={tanthanh} />
                  </div>
                  <p class="name">Tấn Thành</p>
                </div>
                <p>
                  Không gian gia đình thật sự càng tuyệt với sau khi được tư vấn
                  và sắp đặt các loại cây xanh từ LH Nature. Chúc LH Nature phát
                  triển mạnh mẽ hơn nữa và sớm trở thành nơi khởi nguồn không
                  gian xanh lớn nhất Việt Nam, tôi tin chắc điều đó.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="endmid" data-aos="zoom-out-up">
        <div class="blog-title new_title lt">
          <h2 class="">
            <a title="Tin tức liên quan">
              <span>Tin tức nổi bật</span>
            </a>
          </h2>
        </div>
        <div className="rooms">
          <div id="rowssss" class="col-xs-12 col-sm-6 col-md-4 row ">
            <div className="blog_inner">
              <div className="blog_img">
                <Link to="/room1">
                  <a
                    className="aa"
                    title="Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm"
                  >
                    <img
                      id="rroom"
                      className="room"
                      src={r1}
                      alt="Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm"
                    />
                  </a>
                </Link>

                <h3>
                  <a title="Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm">
                    Tân trang phòng ngủ đẹp với nội thất cao cấp dịp cuối năm
                  </a>
                </h3>
                <p>
                  <span>
                    Sau một năm sử dụng, những vật dụng trong phòng ngủ sẽ ít
                    nhiều bị cũ đi, hư hỏng hoặc đơn giản là “không còn đẹp”. Và
                    nếu có điều kiện, bạn nên thay thế chúng bằng...
                  </span>
                </p>
                <br></br>
              </div>
            </div>
          </div>
          <div id="rowssss" class="col-xs-12 col-sm-6 col-md-4 row ">
            <div className="blog_inner">
              <div className="blog_img">
                <Link to="/room2">
                  <a
                    className="aa"
                    title="Thiết kế phòng khách tinh tế và sang trọng"
                  >
                    <img
                      className="room"
                      src={r2}
                      alt="Thiết kế phòng khách tinh tế và sang trọng"
                    />
                  </a>
                </Link>

                <h3>
                  <a title="Thiết kế phòng khách tinh tế và sang trọng">
                    Thiết kế phòng khách tinh tế và sang trọng
                  </a>
                </h3>
                <p>
                  <span>
                    Với bề dày kinh nghiệm từ việc thiết kế, thi công hàng nghìn
                    công trình nội thất biệt thự, nhà phố, căn hộ chung cư cao
                    cấp, cùng sự cập nhật liên tục các phong...
                  </span>
                </p>
                <br></br>
              </div>
            </div>
          </div>
          <div id="rowssss" class="col-xs-12 col-sm-6 col-md-4 row ">
            <div className="blog_inner">
              <div className="blog_img">
                <Link to="/room3">
                  <a
                    className="aa"
                    title="Phòng thay đồ (Closet) trong nhà – Không gian sống nên có của phụ nữ hiện đại"
                  >
                    <img
                      className="room"
                      src={r3}
                      alt="Phòng thay đồ (Closet) trong nhà – Không gian sống nên có của phụ nữ hiện đại"
                    />
                  </a>
                </Link>

                <h3>
                  <a title="Phòng thay đồ (Closet) trong nhà – Không gian sống nên có của phụ nữ hiện đại">
                    Phòng thay đồ (Closet) trong nhà – Không gian sống nên có
                    của phụ nữ hiện đại
                  </a>
                </h3>
                <p>
                  <span>
                    Vì vậy trong mỗi căn nhà, khi mọi gian phòng đều mang những
                    công năng riêng, phục vụ cho cuộc sống của cả gia đình, hãy
                    dành lấy một phần không gian...
                  </span>
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="view_more">
        <a href="https://mew-furniture.mysapo.net/tin-tuc" title="Xem tất cả">
          Xem tất cả
        </a>
      </div> */}
    </div>
  );
}
