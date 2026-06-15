import "./JoinOurTeam.css";

const JoinOurTeam = () => {
  return (
    <section className="join-team">
      <div className="container">
        {/* Top Content */}
        <div className="top-content">
          <h1>Join Our Team</h1>

          <p>
            At Goldengallop, we're more than just a digital agency—we're a
            family of innovators, creators, and strategists who are passionate
            about helping brands succeed in the digital world. If you're
            looking for a dynamic workplace where creativity meets cutting-edge
            technology, you've come to the right place. We offer a collaborative
            environment, endless learning opportunities, and the chance to work
            with some of the best minds in the industry.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="why-section">
          <div className="why-content">
            <h2>Why Choose Us?</h2>

            <p className="subtitle">
              Know the reasons why joining is the best decision :
            </p>

            <div className="feature">
              <strong>Exciting Projects:</strong> From SEO strategies to
              innovative web experiences, we tackle some of the industry's most
              forward-thinking projects. Join us to expand your creative limits.
            </div>

            <div className="feature">
              <strong>Collaborative Teamwork:</strong> Our success is built on
              collaboration and mutual respect. Work with passionate
              professionals in a culture that values teamwork and creativity.
            </div>

            <div className="feature">
              <strong>Work-Life Balance:</strong> We believe in flexible working
              arrangements and maintaining a healthy work-life balance while
              delivering top results.
            </div>

            <div className="feature">
              <strong>Inclusive Culture:</strong> Diversity fuels our
              creativity. We are committed to fostering an inclusive
              environment where every voice is valued.
            </div>
          </div>

          <div className="why-image">
            <img
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;