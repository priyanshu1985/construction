import { useRef } from "react";
import "./App.css"; // Import the comprehensive CSS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const servicesRef = useRef(null);

  return (
    <div className="app-container">
      <Navbar
        onScrollToServices={() =>
          servicesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero
        onScrollToServices={() =>
          servicesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Stats />
      <Services servicesRef={servicesRef} />
      <Footer />
    </div>
  );
}
