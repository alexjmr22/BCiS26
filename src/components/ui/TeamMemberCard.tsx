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
  return (
    <div className="relative flex flex-col items-center justify-end min-h-[340px] w-64 h-85 group">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 rounded-4xl shadow-md z-0 overflow-hidden"
          style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        />
        <div className="pointer-events-none absolute inset-0 rounded-4xl bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-1/2 rounded-b-4xl overflow-hidden z-10">
          <div className="w-full h-full bg-gradient-to-t from-slate-900 via-brand-purple/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-end h-full p-4 pb-8 w-full">

        <div className="relative w-full flex flex-col items-center h-20">
          <div className="flex flex-row gap-5 transition-all duration-300 transform group-hover:-translate-y-14 z-10">
            <a href={email ? `mailto:${email}` : 'https://youtu.be/dQw4w9WgXcQ?si=1LhO8WxnQij0RWJu'} className="hover:scale-110 transition-transform">
              <img src={emailImg} alt="Email" className="w-10 h-10 md:w-11 md:h-11 shadow-lg" />
            </a>
            <a href={linkedin ? linkedin : 'https://youtu.be/dQw4w9WgXcQ?si=1LhO8WxnQij0RWJu'} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10 md:w-11 md:h-11 shadow-lg" />
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-0">
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
