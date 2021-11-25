import React from "react";
import { useCart } from "react-use-cart";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import FlowerMainJpg from "../../images/flower-main.jpg";
import "./mainsection.css";

const Mainsection = () => {
  const { addItem } = useCart();

  const MySwal = withReactContent(Swal);
  const addedCart = () => {
    MySwal.fire({
      title: <h4>Məhsul səbətə əlavə olundu!</h4>,
      showConfirmButton: false,
      icon: "success",
      timer: 1200,
    });
  };

  const data = [
    {
      id: 7,
      name: "BUCKET LOVE 100 pink rose",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      price: 2250,
      img: FlowerMainJpg,
      quantity: 1,
    },
  ];
  return (
    <section className="main-section pt-4 mt-3">
      <div className="container padding-container">
        {data.map((product, index) => {
          return (
            <div className="order-div" key={index}>
              <div className="order-div-left">
                <div className="div-left-image">
                  <img src={product.img} alt="null" />
                </div>
              </div>
              <div className="order-div-right">
                <h1 className="order-name">{product.name}.</h1>
                <p className="order-description">{product.desc}</p>
                <div className="order-about pb-3">
                  <div className="order-about-box">
                    <p className="box-about-name">Kateqoriya</p>
                    <div className="box-about-div">Pink Rose</div>
                  </div>
                  <div className="order-about-box">
                    <p className="box-about-name">Stok</p>
                    <div className="box-about-div">Var</div>
                  </div>
                  <div className="order-about-box">
                    <p className="box-about-name">Satıldı</p>
                    <div className="box-about-div">25 ədəd</div>
                  </div>
                </div>
                <div className="order-count pt-4">
                  <p>Ədəd</p>
                  <div className="btn-count">
                    <button className="minus-btn">-</button>
                    <span className="order-cnt" id="order-cnt">
                      {product.quantity}
                    </span>
                    <button className="plus-btn">+</button>
                  </div>
                </div>
                <div className="order-adress pt-4">
                  <p className="order-adress-tag mb-2 mt-4">Ünvan</p>
                  <select
                    className="form-select mb-2"
                    name="adresses"
                    id="adresses"
                  >
                    <option selected>Ünvanı qeyd edin</option>
                    <option value="1">Bakı şəh. Nərimanov</option>
                    <option value="2">Bakı şəh. Gənclik</option>
                    <option value="2">Bakı şəh. 28 May</option>
                  </select>
                </div>
                <div className="order-amount pt-4">
                  <p className="order-amount-tag pt-2 mt-4">
                    Elə indi sifariş edin!
                  </p>
                  <div className="order-buttons mb-4 mt-4">
                    <div className="main-price-about">
                      <span id="price" className="me-1">
                        {product.price}
                      </span>
                      ₼
                    </div>
                    <button
                      className="order-btn"
                      onClick={() => {
                        addItem(product);
                        addedCart();
                      }}
                    >
                      <i className="fas fa-cart-plus me-2"></i> Əlavə et
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mainsection;
