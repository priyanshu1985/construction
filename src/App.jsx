import { useRef, useState } from "react";
import "./App.css"; // Import the comprehensive CSS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Navbar
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToServices={() => scrollToSection(servicesRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
        onGetQuote={() => setIsModalOpen(true)}
      />
      <div ref={homeRef}>
        <Hero
          onScrollToServices={() => scrollToSection(servicesRef)}
        />
      </div>
      <Stats />
      <Services servicesRef={servicesRef} />
      <div ref={contactRef}>
        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
