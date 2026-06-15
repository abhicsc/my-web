
import "./ContactSection.css";
import { FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Background Overlay */}
      <div className="overlay"></div>

      <div className="contact-heading">
        <h3>Ready to</h3>
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-container">
        {/* Left Form Side */}
        <div className="contact-form-area">
          <form>
            <div className="input-row">
              <div className="input-box">
                <label>
                  Full Name <span>*</span>
                </label>
                <input type="text" />
              </div>

              <div className="input-box">
                <label>
                  Email Address <span>*</span>
                </label>
                <input type="email" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-box">
                <label>
                  Phone Number <span>*</span>
                </label>
                <input type="text" />
              </div>

              <div className="input-box">
                <label>
                  Address <span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="input-box textarea-box">
              <label>
                What's on Your Mind? <span>*</span>
              </label>
              <textarea rows="4"></textarea>
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Info Side */}
        <div className="contact-info">
          <h2>
            For Any Kind Of Information
            <br />
            Please Contact
          </h2>

          <div className="phone-icon">
            <FaPhoneAlt />
          </div>

          <h3>+91 7869384184</h3>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;