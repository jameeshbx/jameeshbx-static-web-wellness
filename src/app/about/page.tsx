import HeroSection from "../components/aboutHero";
import ValueSection from "../components/Value";
import AboutSection from "../components/about";
import JourneySection from "../components/Journey";

export default function BeautyCenter() {
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection/>

      {/* Values Section */}
      <ValueSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Journey Section */}
      <JourneySection/>
    </main>
  )
}

