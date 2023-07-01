import "./Contact.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { TbArrowBack } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import { FcApprove } from "react-icons/fc";
import { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
export default function Contact() {
  const {
    body,setBody,
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
    <div class="rowss">
      
          <div class="contact">
            <div class="page-title">
              <h2>Liên hệ</h2>
            </div>

            <div className="if">
              <span>Địa chỉ chúng tôi :</span>
              <span>480/27 CMT8,P11,Q3,TP HCM.</span>
            </div>
            <div className="if">
              <span>Điện thoại :</span>
              <a href="tel:0374509271" class="">
                0374509271
              </a>
            </div>
            <div className="if">
              <span>Email:</span>
              <a href="hoang19992212@gmail.com" class="">
                hoang19992212@gmail.com
              </a>
            </div>
          </div>
          <Form className="form_email" ref={form} onSubmit={sendEmail}>
        <Form.Group className="groupss">
          <Form.Label className="labels">Họ và tên : </Form.Label>
          <Form.Control
            type="text"
            className="control"
            required
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="groupss">
          <Form.Label className="labels" >Email : </Form.Label>
          <Form.Control
            type="email"
            className="control"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="groupss">
          <Form.Label className="labels" >Số điện thoại : </Form.Label>
          <Form.Control
            type="text"
            className="control"
            required
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Group>
       
        

        <Form.Group className="groupsss">
          <Form.Label className="labels" >Nội dung : </Form.Label>
          <Form.Control

          type="text"
          className="controls"
            required
            name="body"
            value={body}
                onChange={(e) => {
              setBody(e.target.value);
            }}
            />
        </Form.Group>

        <Button className="email_btn" type="submit" onClick={() => {
                  Swal.fire({
                    position: "mid",
                    icon: "success",
                    title: "Gửi thư thành công",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }} >
          Gửi
        </Button>
      </Form>
    </div>
  );
}
