const LogoSection = () => {
  return (
    <section className="video-section">
      {" "}
      {/* Background Glow */} <div className="video-glow"></div> {/* Video */}{" "}
      <video autoPlay muted loop playsInline className="bg-video">
        {" "}
        <source src="/cybite2-video.mp4" type="video/mp4" />{" "}
      </video>{" "}
    </section>
  );
};
export default LogoSection;
