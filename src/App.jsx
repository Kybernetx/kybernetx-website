// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Missions from "./components/Missions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Missions />
      {/* You could add an About or Contact section here */}
      <Footer />
    </>
  );
}

export default App;
