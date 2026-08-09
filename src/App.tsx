import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChoose from "./components/home/WhyChoose";
import OurTeam from "./components/home/OurTeam";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import Portfolio from "./components/home/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChoose />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}

export default App;