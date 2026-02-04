import missionImage from '../../assets/images/aboutOurMission.webp';
import planeta from '../../assets/images/planeta.png';
const MissionSection = () => {
  return (
    <section id="courses" className="relative py-12 md:py-20 px-4 md:px-10 overflow-hidden">
      <div className="relative mx-auto w-[min(1100px,92vw)]">
        {/* planeta decorativo */}
        <img
          src={planeta}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute
            -top-10 md:-top-5
            right-0 md:-right-30
            w-48 md:w-96 lg:w-[500px]
            opacity-50
            z-0
          "
        />

        <h2
          className="
            relative z-10
            font-orbitron font-black
            text-white text-center
            text-[32px] md:text-[64px]
            leading-tight md:leading-[80px]
            py-6
            [text-shadow:2px_2px_0_#EE92C2,-2px_2px_0_#EE92C2,2px_-2px_0_#EE92C2,-2px_-2px_0_#EE92C2,2px_0_0_#EE92C2,-2px_0_0_#EE92C2,0_2px_0_#EE92C2,0_-2px_0_#EE92C2,0_0_15px_rgba(238,146,194,0.5)]
          "
        >
          ABOUT OUR MISSION
        </h2>
      </div>

      <div className="max-w-7xl mt-12 md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left Content - Alinhado com a altura da imagem no desktop */}
        <div className="flex flex-col justify-start gap-4 md:gap-6 items-start text-left z-10">
          <h2
            className="
              font-orbitron font-black
              text-white
              text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]
              leading-tight
              mb-2
              [text-shadow:2px_2px_0_#FFD166,-2px_2px_0_#FFD166,2px_-2px_0_#FFD166,-2px_-2px_0_#FFD166,2px_0_0_#FFD166,-2px_0_0_#FFD166,0_2px_0_#FFD166,0_-2px_0_#FFD166,0_0_15px_rgba(238,146,194,0.5)]
            "
          >
            WHAT IS A BEST COURSE?
          </h2>

          <div className="font-oxanium text-white text-[15px] md:text-[18px] leading-relaxed opacity-90 md:space-y-3 my-3 mx-2">
            <p>International Educational Opportunity</p>
            Every year, Local BEST Groups organize Academic Courses
            on Technology across Europe. Open to students from
            universities in the BEST network, you can join up to 30
            peers to enhance your studies with company visits, case studies,
            and unique classes.
          </div>

          {/* <button className="bg-[#524094] lg:hover:bg-[#3d2f70] text-white font-orbitron font-bold py-3 px-8 rounded-4xl text-[16px] md:text-[18px] transition-all shadow-lg">
            PHOTOS
          </button> */}
        </div>

        {/* Right Image */}
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -inset-1 bg-black blur-xl opacity-40"></div>
          <img
            src={missionImage}
            alt="BEST Course Students"
            className="relative shadow-2xl w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
