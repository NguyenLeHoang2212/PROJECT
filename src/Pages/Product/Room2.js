import r1 from "./r1.jpg";
import r2 from "./r2.jpg";
import r3 from "./r3.jpg";
import "./Room2.css";
export default function Room2() {
  return (
    <div className="room2">
      <div className="tittle">
        <h1>Tân trang phòng ngủ đẹp với nội thất cao cấp </h1>
        <img className="ima" src={r2} />
      </div>
      <div>
        <div className="inf">
          <h2>Giường ngủ đẹp</h2>
          <p>
            Trong không gian phòng ngủ, giường ngủ luôn được lựa chọn với chất
            liệu chắc chắn và bền bỉ nên có thể tồn tại vào một khoảng thời gian
            dài. Tuy nhiên để chiếc giường ngủ có cảm giác mới lạ và ấn tượng
            hơn, bạn có thể thay đổi ga giường, những chiếc gối hoặc làm mới
            giường bằng cách phun sơn màu gỗ. Hay với những gia đình có điều
            kiện tốt hơn, có thể sắm loại giường ngủ nhập khẩu cao cấp mới để
            thay thế cho căn phòng ngủ của mình
          </p>
        </div>
      </div>
      <div className="inf">
        <h2>Thảm trải sàn</h2>
        <p>
          Ngày nay, thảm trải sàn rất đa dạng về mẫu mã và chất liệu, thảm có
          thể sự dụng trong tất cả các không gian sống. Đặc biệt là không gian
          phòng ngủ, sau thời gian sử dụng thảm sẽ bị cũ và đổi màu, chúng ta có
          thể thay thế bằng chiếc thảm mới, màu sắc bắt mắt, hiện đại hơn. Thảm
          trải sàn bằng len thường được sử dụng nhất vì nó đem lại cảm giác ấm
          áp trong căn phòng.
        </p>
      </div>
      <div className="inf">
        <h2>Tủ quần áo</h2>
        <p>
          Tủ quần áo gỗ công nghiệp là mẫu tủ thường được các gia đình lựa chọn
          để cất giữ quần áo, vật dụng cá nhân gọn gàng. Cuối năm, chúng ta có
          thể đem tủ ra vệ sinh tủ và kiểm tra xem có bị mối mọt, cong vênh, nếu
          có hãy chọn một chiếc tủ gỗ mới phù hợp hơn.
        </p>
      </div>
      <div className="inf">
        <h2>Đèn trang trí phòng ngủ</h2>
        <p>
          Nếu trước đây, phòng ngủ chưa có đèn trang trí, thì hãy chọn cho mình
          một mẫu đèn trang trí độc đáo. Trong phòng ngủ, đèn trang trí có thể
          là đèn âm tường, đèn trần hoặc đèn để bàn. Lưu ý màu sắc đèn phòng ngủ
          không nên quá sáng tránh gây cảm giác khó chịu. Khi trang trí phòng
          ngủ với đèn, không gian phòng ngủ sẽ trở nên sang trọng hơn.
        </p>
      </div>
    </div>
  );
}
