import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div>
          <h3>Contact Information</h3>
        </div>
        <div className="footer-info">
          <div className="footer-contact">
            <p>Name: Mo Shoyab</p>
            <p>Email: smartdrive5640@gmail.com</p>
            <p>Mobile: +91 72398 98968</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/yourinstagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://wa.me/+917849826900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
