import { useEffect, useRef, useState } from 'react'
import emailImg from '../../assets/icons/email.png'
import linkedinImg from '../../assets/icons/linkedin.png'

interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

const TeamMemberCard = ({ name, role, image, linkedin, email }: TeamMemberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detetar se é um dispositivo touch
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouchDevice();

    // Só aplicar o efeito de scroll em dispositivos touch
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Ativar quando o card está no centro do ecrã (40% a 60% visível)
          const ratio = entry.intersectionRatio;
          setIsActive(ratio > 0.6);
        });
      },
      {
        // Margens para criar uma "zona ativa" no centro do ecrã
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isTouchDevice]);

  // Em dispositivos touch, usar isActive; caso contrário, usar hover (group-hover)
  const activeClass = isTouchDevice ? (isActive ? 'touch-active' : '') : '';

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col items-center justify-end min-h-[340px] w-64 h-85 group ${activeClass}`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 rounded-4xl shadow-md z-0 overflow-hidden"
          style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        />
        <div className={`pointer-events-none absolute inset-0 rounded-4xl bg-black/20 transition-colors duration-300 z-10 ${
          isTouchDevice 
            ? (isActive ? 'bg-black/40' : 'bg-black/20') 
            : 'group-hover:bg-black/40'
        }`} />
        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-1/2 rounded-b-4xl overflow-hidden z-10">
          <div className={`w-full h-full bg-gradient-to-t from-slate-900 via-brand-purple/40 to-transparent transition-opacity duration-300 ${
            isTouchDevice 
              ? (isActive ? 'opacity-90' : 'opacity-0') 
              : 'opacity-0 group-hover:opacity-90'
          }`} />
        </div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-end h-full p-4 pb-8 w-full">

        <div className="relative w-full flex flex-col items-center h-20">
          <div className={`flex flex-row gap-5 transition-all duration-300 transform z-10 ${
            isTouchDevice 
              ? (isActive ? '-translate-y-14' : 'translate-y-0') 
              : 'group-hover:-translate-y-14'
          }`}>
            <a href={email ? `mailto:${email}` : 'https://youtu.be/dQw4w9WgXcQ?si=1LhO8WxnQij0RWJu'} className="hover:scale-110 transition-transform">
              <img src={emailImg} alt="Email" className="w-10 h-10 md:w-11 md:h-11 shadow-lg" />
            </a>
            <a href={linkedin ? linkedin : 'https://youtu.be/dQw4w9WgXcQ?si=1LhO8WxnQij0RWJu'} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10 md:w-11 md:h-11 shadow-lg" />
            </a>
          </div>
          <div className={`absolute inset-x-0 bottom-0 flex flex-col items-center transition-all duration-300 z-0 ${
            isTouchDevice 
              ? (isActive ? 'opacity-100' : 'opacity-0') 
              : 'opacity-0 group-hover:opacity-100'
          }`}>
            <h5 className="text-sm md:text-base font-bold text-white text-center px-1 leading-tight uppercase tracking-tight">
              {name}
            </h5>
            <p className="text-brand-pink text-[10px] md:text-xs font-semibold text-center mt-1 px-2 uppercase tracking-wider">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
