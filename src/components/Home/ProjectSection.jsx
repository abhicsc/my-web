
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section className="project-section">
      {/* Background Glow */}
      <div className="project-glow"></div>

      <div className="project-content">
        {/* Heading */}
        <h1>
          Have Projects In Mind <span>?</span>
        </h1>

        {/* Face Card */}
        <div className="face-card">
          <div className="eyes">
            <div className="eye">
              <div className="pupil"></div>
            </div>

            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>

          <div className="smile"></div>
        </div>

        {/* Button */}
        <button className="appointment-btn">
          BOOK APPOINTMENT <span>↗</span>
        </button>

        {/* Bottom Text */}
        <p>
          Your Vision, Our Expertise – Let’s Build It Together!
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;