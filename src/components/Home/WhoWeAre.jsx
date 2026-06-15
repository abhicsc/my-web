
import "./WhoWeAre.css";
import { FaCog, FaLightbulb, FaBullhorn } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <h1 className="who-title">Who We Are</h1>

      <div className="who-container">
        {/* Card 1 */}
        <div className="who-card">
          <div className="icon-circle">
            <FaCog className="icon" />
          </div>

          <h2>Solution Providers</h2>

          <p>
            We have 360° solutions for your branding & marketing problems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="who-card">
          <div className="icon-circle">
            <FaLightbulb className="icon" />
          </div>

          <h2>Brand Consultants</h2>

          <p>
            We provide bespoke solutions to make your brand matter .
          </p>
        </div>

        {/* Card 3 */}
        <div className="who-card active-card">
          <div className="icon-circle active-icon">
            <FaBullhorn className="icon white-icon" />
          </div>

          <h2>Marketing Agency</h2>

          <p>
            We are ‘Brand-blooded’ folks & Marketing Brainiacs with Design in
            our DNA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;