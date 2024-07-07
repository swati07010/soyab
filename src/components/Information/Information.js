import React from "react";
import "./Information.css"; // Import CSS for styling
import bick_a from "../../images/bick_banner_a.png";
import bick_image from "../../images/bick4.png";
import team_image from "../../images/team_images.png";
const Information = () => {
  return (
    <div className="information">
      <header className="information-header">
        {/* <h1> Smart Drive Pvt Ltd</h1> */}
      </header>
      <div className="information-banner">
        <img
          className="information-banner-img"
          src={bick_a}
          alt="Company Banner"
        />
      </div>
      <h1 className="mission_heading">Our Mission</h1>
      <div className="information-body">
        <div classNmae="information-body-img">
          <img className="bick_images" src={bick_image} alt="body-img" />
        </div>
        <div className="information-body-text">
          <h1>What makes Smart Drive Pvt Ltd stand out?</h1>
          <p>
            We at Smart Drive want to change the bike servicing industry by
            providing trustworthy and real bike services at affordable prices.
          </p>
          <br></br>

          <p>
            At Smart Drive, we believe your two-wheeler is more than just a
            machine; it’s a valued part of your life, and we treat it as such.
            Our premium quality services, offered at cost-effective prices,
            combined with our transparency and genuine customer care,
            distinguish us from the competition.
          </p>
          <br></br>
          <p>
            Our mission is to elevate the industry from both perspectives. For
            our clients, we deliver a pleasant, cost-effective, and swift
            service, repair, and maintenance experience. For service providers,
            we offer access to a wide range of inventory and spare parts
            directly from OEM and OES, thereby enhancing service quality,
            customer trust, and loyalty.
          </p>
        </div>
        <div></div>
      </div>
      <br></br>
      <h1 className="mission_heading">Our Team</h1>

      <div className="information-body">
        <div classNmae="information-body-img">
          <img className="bick_images-new" src={team_image} alt="body-img" />
        </div>
        <div className="information-body-text">
          <p>
            Smart Drive is India’s leading bike service provider, operating
            across numerous cities and states. We offer 500+ top-quality
            services for your bikes, including repair, servicing, maintenance,
            inspection, and much more.
          </p>
          <br></br>
          <p>
            Our dedicated team is committed to exceeding your expectations and
            earning your trust with our exceptional service. We promise you a
            lifelong delightful experience with Smart Drive, ensuring your
            vehicle always receives the care it deserves.
          </p>
        </div>
        <div></div>
      </div>
      <br></br>
      <h1 className="mission_heading">What makes us a one stop solution ?</h1>
      <div className="information-body">
        <div className="information-body-text">
          <h1>Service Quality Assurance</h1>
          <p>
            At Smart Drive, we use only originally manufactured products to
            ensure the best possible bike service experience for our customers.
          </p>
          <br></br>
          <p>
            Customer satisfaction is our top priority, and we achieve this
            through our commitment to quality service. With over 500 happy
            customers, we take pride in delivering excellence.
          </p>
        </div>
        <div className="information-body-text">
          <h1>Price Transparency</h1>
          <p>
            At Smart Drive, we believe in a transparent pricing policy to offer
            the best prices on all spare parts.
          </p>
          <br></br>
          <p>
            Our competitive prices will never let you down, thanks to our
            partnerships with spare parts wholesalers who provide the best
            prices in the market.
          </p>
        </div>
      </div>
      <div className="information-bottom">
        <div className="information-bottom-dec">
          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/bajaj-seeklogo.com_.png"
            />
          </div>
          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/kindpng_1748842.png"
            />
          </div>
          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/PngItem_124765.png"
            />
          </div>
          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/hiclipart.com_.png"
            />
          </div>
          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/royal-enfield-seeklogo.com-1.png"
            />
          </div>

          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/hiclipart.com-1.png"
            />
          </div>

          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/tvs.png"
            />
          </div>

          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/output-onlinepngtools-29.png"
            />
          </div>

          <div className="information-bottom-dec-img">
            <img
              className="information-bottom-dec-img_new"
              src="https://bikefixup.in/wp-content/uploads/2022/03/yamaha-logo-3873-1969x2048.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
