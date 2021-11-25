import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="pt-5 mt-5">
        <div className="container padding-container">
          <hr className="mt-5 mb-4" />
        </div>
      </section>
      <section className="mt-3">
        <div className="container padding-container">
          <div className="footer-main px-2 mb-3 row">
            <div className="footer-box col-sm-12 col-md-4">
              <h3 className="mb-2">Filiallarımız</h3>
              <p>Wax Flowers</p>
              <p>Vagif prospekti 105 C</p>
            </div>
            <div className="footer-box col-sm-12 col-md-4">
              <h3 className="mb-2">Əlaqə</h3>
              <a href="tel:+994(12)4414001">+994(12)4414001</a>
              <a href="tel:+994(51)5000048">+994(51)5000048</a>
            </div>
            <div className="footer-box col-sm-12 col-md-4">
              <h3 className="mb-2">Bizi izləyin</h3>
              <a href="instagram.com">
                <i className="fab fa-instagram me-2"></i>waxflowersbaku
              </a>
              <a href="facebook.com">
                <i className="fab fa-facebook-f me-2"></i> waxflowersbaku
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p className="text-center">
          Copyright &copy; 2021 Deirvlon Technologies. All rights are reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
