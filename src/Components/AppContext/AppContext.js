import { createContext, useState, useEffect, useRef } from "react";
import { lists } from "../API/API";

import emailjs from "@emailjs/browser";
import AOS from "aos";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [data, setData] = useState(() => lists.allproducts);
  const [dataLiving, setLiving] = useState(lists.living);
  const [dataBed, setBed] = useState(lists.bed);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [body, setBody] = useState("");
  const [bill, setBill] = useState(0);
  const [img, setImg] = useState();
  const [isCurr, setIsCurr] = useState(false);

  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("home")) {
      setCart(JSON.parse(localStorage.getItem("cart_list")));
    }
  }, []);
  const handle_hover = (item, index) => {
    setImg(item);
  };
  const handle_menu = () => {
    setMenu(!menu);
  };

  const changeQty2 = (id, num) => {
    setCurr(() => {
      if (curr.id === id && !(curr.qty == 1 && num == -1)) {
        return { ...curr, qty: curr["qty"] + num };
      } else {
        return curr;
      }
    });
  };
  const [curr, setCurr] = useState(() => {
    if (localStorage.getItem("home")) {
      let home = JSON.parse(localStorage.getItem("home"));
      setImg(home.img[0]);
      return home;
    }
  });
  const handle_popup = (id) => {
    setIsCurr(!isCurr);
    if (id !== undefined) {
      const CurrH = data.allproducts.find((pizza) => pizza.id === id);
      setCurr({ ...CurrH, qty: 1 });
     
    }
  };

  const addCart = (id) => {
    let kq = data.find((item) => item.id == id);
    const index = cart.findIndex((item) => item.id == id);
    if (index >= 0) {
      let newList = cart;
      newList[index]["qty"]++;
      setCart(newList);
      localStorage.setItem("cart_list", JSON.stringify(newList));
    } else {
      setCart([...cart, { ...kq, qty: 1 }]);
      localStorage.setItem(
        "cart_list",
        JSON.stringify([...cart, { ...kq, qty: 1 }])
      );
    }
  };
  const addCart2 = (id) => {
    const kq = data.find((item) => {
      return item.id === id;
    });
  };
  const changeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id == id && !(num == -1 && item["qty"] == 1)
        ? { ...item, qty: item["qty"] + num }
        : item
    );
    setCart(kq);
    localStorage.setItem("cart_list", JSON.stringify(kq));
  };
  const handle_product = (id) => {
    const CurrH = data.find((item) => item.id === id);
    // setCurr(CurrPizza);
    console.log(CurrH);
    setCurr({ ...CurrH, qty: 1 });
    localStorage.setItem("home", JSON.stringify({ ...CurrH, qty: 1 }));
  };
  const deletepd = (id) => {
    const kq2 = cart.filter((item) => {
      return item.id != id;
    });
    setCart(kq2);
    localStorage.setItem("cart_list", JSON.stringify(kq2));
  };
  const sum_bill = () => {
    const sum = cart.reduce((acc, valueCur) => {
      let kq = valueCur.prices * valueCur.qty;
      return acc + kq;
    }, 0);
    setBill(sum);
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
    // AOS.init();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setPhone("");

    emailjs
      .sendForm(
        "service_3ahif6w",
        "template_oor2boh",
        form.current,
        "bCpLWUMirINrCkGLR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const form = useRef();
  useEffect(() => {
    sum_bill();
  }, [cart]);
  return (
    <AppContext.Provider
      value={{
        body,
        setBody,
        menu,
        setMenu,
        handle_menu,
        dataLiving,
        setLiving,
        dataBed,
        setBed,
        data,
        cart,
        addCart,
        changeQty,
        deletepd,
        query,
        setQuery,
        bill,
        sum_bill,
        setBill,
        handle_popup,
        curr,
        isCurr,
        changeQty2,
        setCurr,
        addCart2,
        handle_product,
        handle_hover,
        img,
        form,
        setImg,
        sendEmail,
        name,
        setName,
        email,
        setEmail,
        address,
        setAdress,
        phone,

        setPhone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
