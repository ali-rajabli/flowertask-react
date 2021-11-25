import React from "react";
import Slider from "react-slick";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";
import Flower1 from "../../images/flower-1.jpg";
import Flower2 from "../../images/flower-2.jpg";
import Flower3 from "../../images/flower-3.jpg";
import Flower4 from "../../images/flower-4.jpg";
import Flower5 from "../../images/flower-5.jpg";
import Flower6 from "../../images/flower-6.jpg";
import "./slidersection.css";

const Slidersection = () => {
  const { addItem } = useCart();

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      id: 1,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower1,
    },
    {
      id: 2,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower2,
    },
    {
      id: 3,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower3,
    },
    {
      id: 4,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower4,
    },
    {
      id: 5,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower5,
    },
    {
      id: 6,
      name: "Bucket Love 100",
      price: "2250",
      desc: "Paketimizin içində 100 ədəd qızılgül vardır. Çatdırılma pulsuz.",
      img: Flower6,
    },
  ];

  return (
    <section className="section-2 pt-4 my-4">
      <div className="container padding-container">
        <h2 className="mb-2 mt-5">Oxşar güllər</h2>

        <div className="slider-container mt-5">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-image">
                    <img src={item.img} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.name}</h5>
                    <p className="card-text text-center">{item.desc}</p>
                  </div>
                  <hr style={{ margin: 0 }} />
                  <div className="card-body card-price" style={{ padding: 0 }}>
                    <div className="card-body-left card-body-details">
                      <span>{item.price} ₼</span>
                    </div>
                    <div className="card-body-right card-body-details">
                      <button
                        className="btn-addcart"
                        onClick={() => {
                          addItem(item);
                          addedCart();
                        }}
                      >
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Slidersection;
