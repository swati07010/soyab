import React from "react";
import bike_a from "../../images/bick2.png";
import bike_b from "../../images/bick1.png";
import bike_c from "../../images/bick3.png";
import bike_d from "../../images/bick4.png";
import bike_e from "../../images/bick5.png";
import bike_f from "../../images/bick6.png";
import bike_g from "../../images/bick7.png";
import bike_h from "../../images/bick8.png";
import bike_i from "../../images/bick9.png";
import "./Contact.css"; // Import CSS for styling

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917849826900"; // Replace with your WhatsApp-enabled phone number
    const message = "Hello! I'd like to get in touch with you."; // Replace with your default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <div className="">
          <div></div>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>For inquiries or assistance, please reach out to us:</p>
          <ul>
            <li>Phone: +91 7849826900</li>
            <li>Email: smartdrive5640@gmail.com</li>
            <li>
              <i class="bi bi-geo-alt"></i>
              Address: Kota ,Rajasthan, India
            </li>
          </ul>
        </div>
        <div className="vehicle-cards-about">
          <div className="card_about">
            <img src={bike_g} alt="Destini 125" className="card-img" />
            <h2>Hero</h2>
            <h3>Destini 125</h3>
            <div className="price">40/- per hour</div>
            <button className="book-button">
              <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                Book Vehicle <i class="bi bi-whatsapp "></i>
              </div>
            </button>
          </div>
          <div className="card_about">
            <img src={bike_d} alt="Destini 125" className="card-img" />
            <h2>Hero</h2>
            <h3>Destini 125</h3>
            <div className="price">40/- per hour</div>
            <button className="book-button">
              <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                Book Vehicle <i class="bi bi-whatsapp "></i>
              </div>
            </button>
          </div>

          <div className="card_about">
            <img src={bike_c} alt="Glamour" className="card-img" />
            <h2>Hero</h2>
            <h3>Glamour</h3>
            <div className="price">40/- per hour</div>
            <button className="book-button">
              <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                Book Vehicle <i class="bi bi-whatsapp "></i>
              </div>
            </button>
          </div>
          <div className="card_about">
            <img src={bike_e} alt="HF Deluxe" className="card-img" />
            <h2>Hero</h2>
            <h3>HF Deluxe</h3>
            <div className="price">40/- per hour</div>
            <button className="book-button">
              <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                Book Vehicle <i class="bi bi-whatsapp "></i>
              </div>
            </button>
          </div>
        </div>
        <div className="whatsapp">
          <button className="book-button-new">
            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
              <i class="bi bi-whatsapp "></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
