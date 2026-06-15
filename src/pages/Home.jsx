import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import ProductList from "../components/Home/ProductList";
import WhoWeAre from "../components/Home/WhoWeAre";
import LogoSection from "../components/Home/LogoSection";
import ProjectSection from "../components/Home/ProjectSection";
import ContactSection from "../components/Home/ContactSection";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductList />
      <WhoWeAre />
      <LogoSection />
      <ProjectSection />
      <ContactSection />
     
    </>
  );
}

export default Home;