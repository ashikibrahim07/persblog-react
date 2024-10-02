import React from "react";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="footer-logo">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="footer-text">
            © {new Date().getFullYear()} PersBlog
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
