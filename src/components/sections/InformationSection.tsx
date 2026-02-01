import planeta from '../../assets/images/planeta 2.png';
import survivalGuide from '../../assets/icons/galaxy.png';
import schedule from '../../assets/icons/shedule.png';


const InformationSection = () => {
  return (
    // AJUSTAR A OPACIDADE DO TINT ATRAS DO TEXTO AQUI !! ----------------------------------------------> bg-[#COR]/OPACIDADE
    <section className="w-full min-h-screen mt-45 py-8 px-6 md:px-12 flex flex-col  items-center justify-center">

      {/* CONTROLAR ESPACAMENTOS AQUI */}
      <div className="relative max-w-7xl w-full flex flex-col gap-20 md:gap-32">
        <img
          src={planeta}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute
            -top-10 md:-top-95
            left-0 md:left-[-80px]
            w-48 md:w-96 lg:w-[350px]
            opacity-50
            z-0
          "
        />
        {/* titulo seccao */}
        <h2
          className="
            relative z-10
            -mt-100
            font-orbitron font-black
            text-white text-center
            text-[32px] md:text-[64px]
            leading-tight md:leading-[80px]
            py-6
            [text-shadow:2px_2px_0_#EE92C2,-2px_2px_0_#EE92C2,2px_-2px_0_#EE92C2,-2px_-2px_0_#EE92C2,2px_0_0_#EE92C2,-2px_0_0_#EE92C2,0_2px_0_#EE92C2,0_-2px_0_#EE92C2,0_0_15px_rgba(238,146,194,0.5)]
          "
        >
          INFORMATION
        </h2>

        {/*botao survival guide e schedule*/}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-90">
          {/* Botão Survival Guide */}
          <div className="flex flex-col items-center">
            <a
              href="https://drive.google.com/file/d/1P1Agm8kmsXa7EZYvsywfOD45tbH_l6Sf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={survivalGuide}
                alt="Survival Guide"
                className="w-32 md:w-40 lg:w-48 hover:scale-105 transition-transform duration-200"
              />
            </a>
            <span className="mt-2 text-[#EE92C2] font-orbitron font-black text-center text-4xl">
              Survival Guide
            </span>
          </div>

          {/* Botão Schedule */}
          <div className="flex flex-col items-center">
            <a
              href="https://drive.google.com/file/d/16IWy1UmKFL1dlj8VxXYNYLD_pB6Pmq-0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={schedule}
                alt="Schedule"
                className="w-32 md:w-40 lg:w-48 hover:scale-105 transition-transform duration-200"
              />
            </a>
            <span className="mt-2 text-[#EE92C2] font-orbitron font-black text-center text-4xl">
              Schedule
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default InformationSection;
