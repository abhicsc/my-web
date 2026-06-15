import "./CareerForm.css";
import { FiPhoneCall } from "react-icons/fi";

const CareerForm = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        {/* Left Form */}
        <div className="career-form">
          <form>
            <div className="form-grid">
              <div className="input-group">
                <label>
                  Full Name <span>*</span>
                </label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input type="email" />
              </div>

              <div className="input-group">
                <label>
                  Phone Number <span>*</span>
                </label>
                <input type="tel" />
              </div>

              <div className="input-group">
                <label>
                  Address <span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="input-group full-width">
              <label>
                Upload Resume/CV <span>*</span>
              </label>
              <input type="file" />
            </div>

            <div className="input-group full-width">
              <label>
                What's on Your Mind? <span>*</span>
              </label>
              <textarea rows="6"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right Contact Card */}
        <div className="contact-card">
          <h2>
            For Any Kind Of Information
            <br />
            Please Contact
          </h2>

          <FiPhoneCall className="phone-icon" />

          <h3>+91 7869384184</h3>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;