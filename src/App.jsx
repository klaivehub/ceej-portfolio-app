import { useState } from "react";
import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import SkillsSection from './sections/SkillsSection'
import Footer from "./components/Footer";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      {/* <PortfolioSection /> */}
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
