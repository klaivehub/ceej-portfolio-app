import { useState } from "react";
import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import SkillsSection from './sections/SkillsSection'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <Footer />
    </>
  );
}

export default App;
