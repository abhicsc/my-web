import "./Footer.css";


import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn
} from "react-icons/md";

import { IoCallOutline } from "react-icons/io5";

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/GGM-logo.png" alt="" style={{
           width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
             border: "2px solid #7c3aed",
           }} /> 
        </div>

          <h3>
            Your Success, Our Passion
          </h3>

          <div className="social-icons">

            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />

          </div>

        </div>

        {/* Company Links */}
        <div className="footer-links">

          <h2>Company</h2>

          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
          </ul>

        </div>

        {/* Services */}
        <div className="footer-links">

          <h2>Our Services</h2>

          <ul>
            <li>Digital Marketing</li>
            <li>Influencer Marketing</li>
            <li>Website Design & Development</li>
            <li>SEO Services</li>
            <li>Search Engine Optimization</li>
            <li>Performance Marketing</li>
          </ul>

        </div>

        {/* Reach Us */}
        <div className="footer-contact">

          <h2>Reach Us</h2>

          <p>
            <MdLocationOn className="icon" />
            39/A Subhash Nagar, Indore, M.P.
          </p>

          <p>
            <IoCallOutline className="icon" />
            +91 7869384184
          </p>

          <p>
            <MdEmail className="icon" />
            info@goldengallopmarketing.com
          </p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p className="gold-text">
          GoldenGallop Marketing
        </p>

        <p>
          ©Copyright 2026, All Rights Reserved
        </p>

        <p>
          Developed by <span>cybite</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;