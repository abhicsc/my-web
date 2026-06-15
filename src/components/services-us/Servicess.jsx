import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaLaptopCode,
  FaBullseye,
  FaPaintBrush,
  FaThumbsUp,
  FaUsers,
} from "react-icons/fa";

import "./Servicess.css";

const services = [
  {
    icon: <FaSearch />,
    title: "SEO Services",
    desc: "Enhance your website's visibility on search engines and attract organic traffic with our expert SEO strategies.",
  },
  {
    icon: <FaChartLine />,
    title: "Search Engine Marketing",
    desc: "Maximize your online presence with targeted advertising on search engines to boost your conversions and ROI.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Marketing",
    desc: "Engage with your audience and grow your brand's presence on platforms like Facebook, Instagram, and Twitter.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Design & Development",
    desc: "Create visually appealing, user-friendly, and responsive websites that drive engagement and conversions.",
  },
  {
    icon: <FaBullseye />,
    title: "Performance Marketing",
    desc: "Achieve measurable results with our performance-based marketing strategies tailored to your business goals.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    desc: "Captivate your audience with creative and visually stunning designs that tell your brand's story.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Social Media Optimization (SMO)",
    desc: "Optimize your social media profiles to increase visibility, engagement, and drive traffic to your website.",
  },
  {
    icon: <FaUsers />,
    title: "Influencer Marketing",
    desc: "Leverage the power of influencers to promote your brand and reach a wider audience with authentic endorsements.",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Your Success, Our Mission:</h2>
        <p>Explore Our Services</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-box">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>Consult Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;