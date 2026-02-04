import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdCalendarMonth } from 'react-icons/md';

const HeroSection = () => {
  const targetDate = new Date('2026-07-15T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <>

      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-38">
        <div className="relative z-20 text-center mb-10 px-4">
          <h1 className="
            text-[48px] md:text-[96px] 
            font-black text-white 
            font-orbitron 
            tracking-tight leading-none 
            mb-4
            drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]
          ">
            Space Safety:
          </h1>
          <h2 className="
            text-[24px] md:text-[68px] 
            font-black text-white 
            font-orbitron 
            mt-2 
            tracking-tighter leading-none 
            drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]
          ">
            Your Guide to the final frontier
          </h2>
        </div>

        <div className="relative z-20 my-6 flex gap-1 sm:gap-3 md:gap-4 items-center justify-center px-4">
          {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((value, index) => (
            <React.Fragment key={index}>
              <div className="bg-[#524094] rounded-xl sm:rounded-2xl border-2 sm:border-4 border-brand-pink w-14 h-12 sm:w-16 sm:h-14 md:w-32 md:h-24 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                <span className="text-xl sm:text-2xl md:text-[50px] font-black font-orbitron text-white">{formatNumber(value)}</span>
              </div>
              {index < 3 && (
                <span className="text-xl sm:text-3xl md:text-5xl font-black text-white px-0.5 sm:px-1 md:px-2 shadow-sm">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="relative z-20 my-8">
          <a
            href="https://forms.gle/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-5 bg-brand-purple text-white rounded-2xl font-black font-orbitron transition-all duration-300 hover:bg-brand-purple/80 hover:scale-105 shadow-lg border border-white/10"
          >
            APPLY NOW
          </a>
        </div>

        <div className="relative z-20 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-20 text-base sm:text-lg lg:text-xl font-orbitron bg-black/40 backdrop-blur-md px-6 sm:px-10 lg:px-16 py-5 sm:py-6 lg:py-8 rounded-2xl sm:rounded-[30px] lg:rounded-[40px] border border-white/5 mt-10 mx-4">
          <div className="flex items-center gap-4 text-white">
            <MdCalendarMonth className="text-brand-purple text-3xl lg:text-5xl" />
            <span className="tracking-wide">July 15 - 24 2026</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <MdLocationOn className="text-brand-purple text-3xl lg:text-5xl" />
            <span className="tracking-wide">Coimbra, Portugal</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;