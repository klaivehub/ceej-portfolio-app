import { useState } from "react";
import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SkillsSection />
    </>
  );
}

export default App;
