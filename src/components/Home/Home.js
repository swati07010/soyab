import React, { useEffect, useRef, useState } from "react";
import Fotter from "../Footer/Footer";
import bick_a from "../../images/bick1.png";
import bick_b from "../../images/bick2.png";
import bick_c from "../../images/bick3.png";
import bick_d from "../../images/bick4.png";
import bick_e from "../../images/bick5.png";
import bick_f from "../../images/bick6.png";

import banner_a from "../../images/banner_a.png";
import banner_b from "../../images/banner_b.png";
import banner_c from "../../images/banner_c.png";
import banner_d from "../../images/banner_d.png";
import main_banner from "../../images/banner_main_new.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main-banner">
        <div className="banners">
          <div className="banner">
            <img src={main_banner} alt="Banner A" />
          </div>
          <div className="banner">
            <img src={banner_b} alt="Banner B" />
          </div>
          <div className="banner">
            <img src={banner_c} alt="Banner C" />
          </div>
          <div className="banner">
            <img src={banner_d} alt="Banner D" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="main-heading">Bike Rentals in Kota Rajasthan</h1>
        <br></br>
        <br></br>
        <h1 className="Questions">Why ONN?</h1>
        <h3>
          We simplified bike rentals, so you can focus on what's important to
          you.
        </h3>
        <div className="about-services">
          <div className="about-services-one">
            <div className="about-services-one-image">
              <img src="https://www.onnbikes.com/img/Safe-Rides-Icon.svg" />
            </div>
            <div className="Heading">Safe Rides</div>

            <div className="about-services-one-text">
              Your safety is our priority. From sanitizing all bikes before
              every use, to extensive on-ground safety measures, your rides with
              ONN will always be safe and reliable. We also offer helmets
              on-demand.
            </div>
          </div>
          <div className="about-services-one">
            <div className="about-services-one-image">
              <img src="https://www.onnbikes.com/img/Flexible-Ownership.svg" />
            </div>
            <div className="Heading">Flexible Ownership</div>

            <div className="about-services-one-text">
              Your safety is our priority. From sanitizing all bikes before
              every use, to extensive on-ground safety measures, your rides with
              ONN will always be safe and reliable. We also offer helmets
              on-demand.
            </div>
          </div>
          <div className="about-services-one">
            <div className="about-services-one-image">
              <img src="https://www.onnbikes.com/img/Smarter-Mobility.svg" />
            </div>
            <div className="Heading">Smarter Mobility</div>

            <div className="about-services-one-text">
              Your safety is our priority. From sanitizing all bikes before
              every use, to extensive on-ground safety measures, your rides with
              ONN will always be safe and reliable. We also offer helmets
              on-demand.
            </div>
          </div>
          <div className="about-services-one">
            <div className="about-services-one-image">
              <img src="https://www.onnbikes.com/img/ONN-Stations.svg" />
            </div>
            <div className="Heading">ONN Stations</div>

            <div className="about-services-one-text">
              Your safety is our priority. From sanitizing all bikes before
              every use, to extensive on-ground safety measures, your rides with
              ONN will always be safe and reliable. We also offer helmets
              on-demand.
            </div>
          </div>
        </div>
      </div>
      <div className="process">
        <h1>Top FAQs</h1>
        <div className="how_to_get_with_ans">
          <div className="how_to_get">
            <div className="Allans">
              <div className="question">
                <ul>
                  <li>
                    <h3>How do I pay?</h3>
                  </li>
                </ul>
              </div>

              <div className="answare">
                <ul>
                  <li>
                    You can pay online using debit/credit card or e-wallets.
                  </li>
                  <li>
                    You can also pay at the hub station during your vehicle
                    pick-up.
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="Allans">
              <div className="question">
                <ul>
                  <li>
                    <h3>Where can I pick up the bike from?</h3>
                  </li>
                </ul>
              </div>
              <div className="answare">
                While booking your bike, you’ll be given an option to select a
                pick-up location in your vicinity.
              </div>
            </div> */}
          </div>
          <div className="how_to_get">
            <div className="Allans">
              <div className="question">
                <ul>
                  <li>
                    <h3> What documents do I need to submit while booking?</h3>
                  </li>
                </ul>
              </div>
              <div className="answare">
                <ul>
                  <li>Aadhar card</li>
                  <li>student ID</li>
                  <li>license is optional</li>
                </ul>
              </div>
            </div>
            {/* <div className="Allans">
              <div className="question">
                <ul>
                  <li>
                    <h3>Will I be getting a complimentary helmet?</h3>
                  </li>
                </ul>
              </div>
              <div className="answare">
                While booking your bike, you’ll be given an option to select a
                pick-up location in your vicinity.
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="testimoninals">
        <h1>Our Customer Reviwes</h1>
        <div className="testimoninal">
          <div className="reviwes">
            <div className="user_name">
              Neha Reddy <i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "Smart Drive bikes have transformed my daily commute. Efficient,
              eco-friendly, and a joy to ride!"
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
          <div className="reviwes">
            <div className="user_name">
              Rajesh Kumar<i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "Using Smart Drive bikes has made my daily commute effortless and
              eco-friendly!"
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
          <div className="reviwes">
            <div className="user_name">
              Sneha Gupta<i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "I love the convenience and cost-effectiveness of Smart Drive
              electric bikes. Perfect for city rides!"
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
          <div className="reviwes">
            <div className="user_name">
              Amit Shah<i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "Smart Drive bikes are a game-changer! They're reliable, stylish,
              and the best option for urban travel."
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
          <div className="reviwes">
            <div className="user_name">
              Pooja Sharma<i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "I highly recommend Smart Drive for anyone looking to switch to
              electric bikes. They're fantastic!"
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
          <div className="reviwes">
            <div className="user_name">
              Anil Patel<i class="bi bi-person-fill usericon"></i>
            </div>
            <div className="user_reviwe">
              "Smart Drive has revolutionized my commute. Their bikes are
              smooth, efficient, and a pleasure to ride."
            </div>
            <div class="rating-star-all">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-half rating-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
