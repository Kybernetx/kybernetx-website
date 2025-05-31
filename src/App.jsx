// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <FeaturedProducts />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
