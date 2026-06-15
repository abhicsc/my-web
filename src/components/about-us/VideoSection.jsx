import "./VideoSection.css";

function VideoSection() {
  return (
    <section class="career-hero">
      

      <div class="bg-video">
            <video autoplay="" loop="" muted="">
                <source src="cybite2ndpage.mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
  );
}

export default VideoSection;