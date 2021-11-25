import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "./navbar.css";

const Navbar = () => {
  const { isEmpty, items, totalItems, cartTotal, removeItem } = useCart();

  const [open, setOpen] = useState(false);

  const handleOpenCartBlur = () => {
    setTimeout(() => {
      setOpen(false);
    }, 100);
  };
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid padding-navbar">
            <a className="navbar-brand" href="#">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item left-item">
                  <a className="active-page" aria-current="page" href="#">
                    Kampaniyalar
                  </a>
                </li>
                <li className="nav-item left-item">
                  <a href="#">Katoqoriya & Məhsullar</a>
                </li>
                <li className="nav-item left-item">
                  <a href="#">Əlaqə</a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item right-item">
                  <button
                    className="basket"
                    onClick={() => {
                      open ? setOpen(false) : setOpen(true);
                    }}
                  >
                    <i className="fas fa-cart-plus"></i> Səbətim
                    <div className="basket-sup-alert">
                      <span className="basket-sup-alert-count">
                        {totalItems}
                      </span>
                    </div>
                  </button>

                  <ul
                    onBlur={handleOpenCartBlur}
                    className="dropdown-menu dropdown-cart"
                    aria-labelledby="#btn-cart"
                    style={open ? { display: "block" } : { display: "none" }}
                  >
                    <div
                      className="cart-items"
                      style={
                        isEmpty
                          ? {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }
                          : { display: "block" }
                      }
                    >
                      {isEmpty ? (
                        <div className="empty-img-div">
                          <h2 className="text-center">Səbət boşdur</h2>
                        </div>
                      ) : (
                        items.map((item, index) => {
                          return (
                            <li className="cart-item" key={index}>
                              <div className="cart-item-left">
                                <div className="cart-item-img-div">
                                  <img src={item.img} alt="Şəkil yoxdur" />
                                </div>
                                <div className="cart-item-about-div">
                                  <h3 className="cart-item-name">
                                    {item.name}
                                  </h3>
                                  <span className="cart-item-price">
                                    {item.price}₼{" "}
                                    <span style={{ color: "black" }}>
                                      (x{item.quantity})
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="cart-item-right">
                                <button
                                  className="btn-delete"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <i className="far fa-trash-alt"></i>
                                </button>
                              </div>
                            </li>
                          );
                        })
                      )}
                    </div>
                    <div className="cart-items-price">
                      <div className="amount-price">
                        <h2>Toplam</h2>
                        <div className="price-div">
                          <span className="discount-price">
                            {cartTotal.toFixed(2)}₼
                          </span>
                        </div>
                      </div>
                      <a
                        className="btn-linkcart"
                        href="#"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Səbətə get
                      </a>
                    </div>
                  </ul>
                </li>
                <li className="nav-item right-item">
                  <a href="#">
                    <i className="far fa-user-circle"></i> Profilim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
