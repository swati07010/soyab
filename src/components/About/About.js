import React from "react";
import "./About.css"; // Import CSS for styling
import bike_a from "../../images/bick2.png";
import bike_b from "../../images/bick1.png";
import bike_c from "../../images/bick3.png";
import bike_d from "../../images/bick4.png";
import bike_e from "../../images/bick5.png";
import bike_f from "../../images/bick6.png";
import bike_g from "../../images/bick7.png";
import bike_h from "../../images/bick8.png";
import bike_i from "../../images/bick9.png";

const About = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917849826900"; // Replace with your WhatsApp-enabled phone number
    const message = "Hello! I'd like to get in touch with you."; // Replace with your default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Smart Drive Pvt Ltd</h1>
      </header>
      <div className="about-banner">
        <img
          className="about-banner-img"
          src="https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-group-therapy-psychologist-meeting-psychological-png-image_6063390.png"
          alt="Banner"
        />
      </div>

      {/* New Vehicle Cards Section */}
      <div className="vehicle-cards">
        <div className="card">
          <img src={bike_d} alt="Destini 125" className="card-img" />
          <h2>Hero</h2>
          <h3>Destini 125</h3>
          <div className="price">448/- per day</div>
          <button className="book-button">
            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
              Book Vehicle <i class="bi bi-whatsapp "></i>
            </div>
          </button>
        </div>

        <div className="card">
          <img src={bike_c} alt="Glamour" className="card-img" />
          <h2>Hero</h2>
          <h3>Glamour</h3>
          <div className="price">499/- per day</div>
          <button className="book-button">
            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
              Book Vehicle <i class="bi bi-whatsapp "></i>
            </div>
          </button>
        </div>
        <div className="card">
          <img src={bike_e} alt="HF Deluxe" className="card-img" />
          <h2>Hero</h2>
          <h3>HF Deluxe</h3>
          <div className="price">299/- per day</div>
          <button className="book-button">
            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
              Book Vehicle <i class="bi bi-whatsapp "></i>
            </div>
          </button>
        </div>
      </div>

      <div className="about-main">
        <div className="leftside">
          <img
            className="about-img"
            src={bike_a}
            alt="Electric vehicles for rent"
          />
          <img
            className="about-img"
            src={bike_b}
            alt="Electric vehicles for rent"
          />
        </div>
        <div className="rightside">
          <section className="about-content">
            <p>
              Smart Drive Pvt Ltd is a pioneering provider of electric vehicles
              for rent, committed to transforming urban mobility. We offer a
              diverse range of electric scooters, bikes, and cars, tailored to
              meet the evolving needs of modern city dwellers.
            </p>
            <p>
              Our mission is to promote sustainability through accessible and
              eco-friendly transportation solutions. Whether you're commuting to
              work, exploring the city, or running errands, our fleet of
              electric vehicles ensures a seamless and environmentally conscious
              travel experience.
            </p>
            <p>
              At Smart Drive, we prioritize customer satisfaction and
              convenience. Our user-friendly rental services are designed to
              provide flexibility and affordability, with options for hourly,
              daily, and long-term rentals. We also offer doorstep delivery and
              pickup to enhance your convenience.
            </p>
            <p>
              Join us in driving towards a greener future. Contact Smart Drive
              Pvt Ltd today to explore how our electric vehicles can elevate
              your urban travel experience while contributing to a cleaner,
              sustainable environment.
            </p>
          </section>
          <div className="rating-client">
            <i className="bi bi-star-fill bi-star-fill-new"></i>
            <i className="bi bi-star-fill bi-star-fill-new"></i>
            <i className="bi bi-star-fill bi-star-fill-new"></i>
            <i className="bi bi-star-fill bi-star-fill-new"></i>
            <i className="bi bi-star-half bi-star-fill-new"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
