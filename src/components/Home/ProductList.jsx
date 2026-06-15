

import "./ProductsList.css";

const ProductsList = () => {
  return (
    <section className="solutions-section">
      <h1 className="section-title">
        Dedicated To Finding Best Solutions
      </h1>

      <div className="solutions-container">
        {/* Left Side */}
        <div className="left-content">
          <p className="small-text">
            Exclusive insights into <br />
            marketing and graphic design
          </p>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="design"
            />
          </div>

          <p className="description">
            Being a design agency at the forefront of digital transformation
            and marketing, we take it upon ourselves to drop some knowledge,
            share insights, let out insider tips, and put our work on full
            display
          </p>
        </div>

        {/* Right Side */}
        <div className="right-content">
          <div className="solution-card">
            <h2>
              How to Design Best Products for Users will Trust in 2024?
            </h2>
          </div>

          <div className="solution-card">
            <h2>
              How to Design Best Products for Users will Trust in 2024?
            </h2>
          </div>

          <div className="solution-card active">
            <h2>
              How to Design Best Products for Users will Trust in 2024?
            </h2>

            <button className="start-btn">
              Get Started ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;