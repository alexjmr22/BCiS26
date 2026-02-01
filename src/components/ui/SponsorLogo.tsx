interface SponsorLogoProps {
  name: string;
  logo: string;
  className?: string;
}

const SponsorLogo = ({ name, logo, className }: SponsorLogoProps) => {
  return (
    <div className={`sponsor-logo group flex items-center justify-center transition-all duration-300 p-2 ${className || 'w-48 h-32 md:w-64 md:h-44'}`}>
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
};






export default SponsorLogo;
