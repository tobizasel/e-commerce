import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
      <div className="footer__info">

        <div className="footer__links">
          <h2>Productos</h2>
          <Link to="/accion" className="footer__link">
            Juegos de Accion
          </Link>
          <Link to="/aventura" className="footer__link">
            Juegos de Aventura
          </Link>
          <Link to="/rol" className="footer__link">
            Juegos de Rol
          </Link>
        </div>
        <div className="footer__contacto">
          <h2>Contacto</h2>
          <p>gamestore@mailfalso.com</p>
          <p>Av. Siempreviva 742</p>
          <p>12 3456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
