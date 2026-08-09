import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChoose from "./components/home/WhyChoose";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import OurTeam from "./components/home/OurTeam";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}

export default App;