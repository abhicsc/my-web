import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/GGM-logo.png" alt="" style={{
           width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
             border: "2px solid #7c3aed",
           }} /> 
        </div>
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        <button className="talk-btn">
          LET'S TALK
          <span className="arrow">↗</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;