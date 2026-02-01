
import React, { useState } from 'react';
import bestLogoSC from '../../assets/images/01. Logos/BEST_Course_LOGO.png';
import bestLogo from '../../assets/images/01. Logos/best-logo.png';

const navLinks = [
  { href: '#about-us', label: 'About Us' },
  { href: '#courses', label: 'Course' },
  { href: '#supporters', label: 'Supporters' },
  { href: '#core-team', label: 'Core Team' },
  { href: '#footer', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60">
      <div className="flex items-center justify-between w-full px-10 py-2">
        <a href="#hero" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
          <img src={bestLogoSC} alt="BEST Summer Course Logo" className="h-8 md:h-12 object-contain" />
          <img src={bestLogo} alt="BEST Logo" className="h-10 md:h-16 object-contain" />
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-3 font-A_Space text-base justify-end">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                className="transition duration-200 hover:-translate-y-1"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && <span className="mx-1">|</span>}
            </React.Fragment>
          ))}
        </div>
        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <span className="block w-5 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-5 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-5 h-0.5 bg-white rounded transition-all" />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col items-end">
          <div className="w-2/3 max-w-xs bg-[#18181b] h-full p-8 flex flex-col gap-6 font-A_Space text-lg shadow-lg">
            <button
              className="self-end mb-8 text-white text-3xl font-bold focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              ×
            </button>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition duration-200 hover:-translate-y-1 text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
