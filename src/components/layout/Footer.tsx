
export default function Footer() {
  return (
    <footer id="footer" className="w-full font-oxanium text-sm text-gray-900">

      {/* --- SECCAO SUPERIOR: ORGANIZERS --- */}
      <div className="bg-[#E6E6E6] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Contact 1 */}
          <div className="flex flex-col items-center gap-1">
            <span className="font-extrabold text-base">Diogo Silva:</span>
            <span className="font-medium">+351 938 575 918</span>
            <a href="mailto:diogo.marinheiro.silva@best-eu.org" className="hover:text-[#523689] transition-colors break-all">
              diogo.marinheiro.silva@best-eu.org
            </a>
            <span className="font-extrabold mt-1">Main Organiser</span>
          </div>

          {/* Contact 2 */}
          <div className="flex flex-col items-center gap-1">
            <span className="font-extrabold text-base">Joana Matos:</span>
            <span className="font-medium">+351 933 772 547</span>
            <a href="mailto:joana.matos@best-eu.org" className="hover:text-[#523689] transition-colors break-all">
              joana.matos@best-eu.org
            </a>
            <span className="font-extrabold mt-1">BEST Coimbra President</span>
          </div>

          {/* Contact 3 */}
          <div className="flex flex-col items-center gap-1">
            <span className="font-extrabold text-base">Melissa Soares:</span>
            <span className="font-medium">+351 913 780 447</span>
            <a href="mailto:melissa.soares@best-eu.org" className="hover:text-[#523689] transition-colors break-all">
              melissa.soares@best-eu.org
            </a>
            <span className="font-extrabold mt-1">Main Organiser</span>
          </div>

        </div>
      </div>

      {/* --- DIVIDER LINE --- */}
      <div className="w-full h-1.5 bg-[#523689]"></div>

      {/* --- SECCAO INFERIOR: SOCIALS & COPYRIGHT --- */}
      <div className="bg-[#D9D9D9] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Esquerda: Email BEST */}
          <a href="mailto:coimbra@best-eu.org" className="font-bold underline hover:text-[#523689] transition-colors">
            coimbra@best-eu.org
          </a>

          {/* Centro: Direitos de autor */}
          <div className="font-bold text-center">
            © 2025 BEST Coimbra. All rights reserved
          </div>

          {/* DIreita: Social Media */}
          <div className="flex items-center gap-3">
            <span className="font-bold">Follow us:</span>
            <div className="flex gap-2">

              {/* os logos das plataformas estao em codigo svg (as sequencias estranhas nos blocos path abaixo) */}

              {/* Instagram Icon */}
              <a href="https://www.instagram.com/bestcoimbra/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#523689] rounded-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/best-coimbra" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#523689] rounded-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* TikTok Icon */}
              <a href="https://www.tiktok.com/@best.coimbra" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#523689] rounded-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-all hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
