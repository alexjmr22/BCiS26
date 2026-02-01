import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutGalaxySection from './components/sections/AboutGalaxySection';
import MissionSection from './components/sections/MissionSection';
import InformationSection from './components/sections/InformationSection';
import SupportersSection from './components/sections/SupportersSection';
import CoreTeamSection from './components/sections/CoreTeamSection';
import './index.css';
import { useEffect, useRef } from 'react';

const App = () => {
  const scrollVelocity = useRef(0);
  const targetScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      targetScroll.current = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {

      scrollVelocity.current += (targetScroll.current - scrollVelocity.current) * 0.05;

      document.documentElement.style.setProperty(
        '--scroll-offset',
        `${scrollVelocity.current * 0.075}px`
      );

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-dvh galaxy-bg text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col gap-20">
        <HeroSection />
        {/* Fundo atrás das seções seguintes */}
        <div className="bg-[#130a26]/50">
          <AboutGalaxySection />
          <MissionSection />
          <InformationSection />
          <SupportersSection />
          <CoreTeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;