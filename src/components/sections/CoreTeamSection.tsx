import TeamMemberCard from '../ui/TeamMemberCard'
import gato from '../../assets/teste.png'
import coreTeam from '../../data/coreTeam'
import lua from '../../assets/images/02. Fundo/LUA.webp'

const CoreTeamSection = () => {
  return (
    <section id="core-team" className="relative pt-20 pb-0 overflow-hidden">
      {/* Imagem da Lua como Fundo */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[160%] sm:w-[130%] md:w-[110%] lg:w-[100%] max-w-[1400px] pointer-events-none z-0">
        <img
          src={lua}
          alt="Lua"
          className="w-full h-auto translate-y-[55%] opacity-15  mix-blend-lighten grayscale"
        />
      </div>

      <div className="relative z-10 px-10">
        <h2 className="
              relative z-10
              font-orbitron font-black
              text-white text-center
              text-[32px] md:text-[64px]
              leading-tight md:leading-[80px]
              py-6
              [text-shadow:2px_2px_0_#EE92C2,-2px_2px_0_#EE92C2,2px_-2px_0_#EE92C2,-2px_-2px_0_#EE92C2,2px_0_0_#EE92C2,-2px_0_0_#EE92C2,0_2px_0_#EE92C2,0_-2px_0_#EE92C2,0_0_15px_rgba(238,146,194,0.5)]
            ">CORE TEAM</h2>

        {/* Primeiros dois elementos juntos e centrados */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          {coreTeam.slice(0, 2).map((member) => (
            <TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image || gato} linkedin={member.linkedin} email={member.email} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          {coreTeam.slice(2, 5).map((member) => (
            <TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image || gato} linkedin={member.linkedin} email={member.email} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-24 md:mb-40">
          {coreTeam.slice(5, coreTeam.length).map((member) => (
            <TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image || gato} linkedin={member.linkedin} email={member.email} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreTeamSection;

