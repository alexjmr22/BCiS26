import galaxyImg1 from '../../assets/images/aboutourgalaxy1.webp';
import galaxyImg2 from '../../assets/images/aboutourgalaxy2.webp';

const AboutGalaxySection = () => {
  return (
    // AJUSTAR A OPACIDADE DO TINT ATRAS DO TEXTO AQUI !! ----------------------------------------------> bg-[#COR]/OPACIDADE
    <section id="about-us" className="w-full min-h-screen py-16 px-6 md:px-12 flex flex-col items-center justify-center ">

      {/* CONTROLAR ESPACAMENTOS AQUI */}
      <div className="max-w-7xl w-full flex flex-col gap-20 md:gap-32">

        {/* titulo seccao */}
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
          ABOUT OUR GALAXY
        </h2>

        {/* --- SUBSECTION 1: What is BEST --- */}
        {/* CHANGED: 'items-center' -> 'items-start' to align H3 top with Image top */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-13">

          {/* Text Block */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3
              className="
                font-orbitron font-black
                text-white
                text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]
                leading-tight
                mb-2
                [text-shadow:2px_2px_0_#FFD166,-2px_2px_0_#FFD166,2px_-2px_0_#FFD166,-2px_-2px_0_#FFD166,2px_0_0_#FFD166,-2px_0_0_#FFD166,0_2px_0_#FFD166,0_-2px_0_#FFD166,0_0_15px_rgba(238,146,194,0.5)]
              "
            >
              What Is BEST
            </h3>
            <p className="font-oxanium text-gray-200 text-sm md:text-base leading-relaxed text-justify shadow-black drop-shadow-md">
              BEST, <strong className="text-white font-bold">Board of European Students of Technology</strong>, is a constantly
              growing non-profit and non-political organisation.
              BEST <strong className="text-white font-bold">strives to help European students of technology to become more
                internationally minded</strong> by reaching a better understanding of European
              cultures and developing capacities to work on an international basis.
              <br /><br />
              <strong className="text-white font-bold">BEST Coimbra</strong> is the local BEST group of the University of Coimbra. Our
              mission is to develop and dynamize the students of the Faculty of
              Sciences and Technology of the University of Coimbra, through a range of
              diverse events.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="">
              <img
                src={galaxyImg1}
                alt="BEST Group"
                className="w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* --- SUBSECTION 2: COIMBRA --- */}
        {/* GRID LAYOUT: Title in Row 1. Image & Text in Row 2. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">

          {/* 1. TITLE (Left Col, Row 1) */}
          <h3
            className="
              md:col-start-1 md:row-start-1
              font-orbitron font-black
              text-white
              text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]
              leading-tight
              tracking-wide
              uppercase
              [text-shadow:2px_2px_0_#EE92C2,-2px_2px_0_#EE92C2,2px_-2px_0_#EE92C2,-2px_-2px_0_#EE92C2,2px_0_0_#EE92C2,-2px_0_0_#EE92C2,0_2px_0_#EE92C2,0_-2px_0_#EE92C2,0_0_15px_rgba(238,146,194,0.5)]
            "
          >
            COIMBRA
          </h3>

          {/* 2. IMAGE (Left Col, Row 2) - Aligns with Paragraph */}
          <div className="md:col-start-1 md:row-start-2">
            <div className="">
              <img
                src={galaxyImg2}
                alt="Coimbra City"
                width={1200}
                height={800}
                className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover rounded-xl shadow-md"
              />

            </div>
          </div>

          {/* 3. TEXT DESCRIPTION (Right Col, Row 2) - Aligns with Image top */}
          <div className="md:col-start-2 md:row-start-2 space-y-6">
            <p className="font-oxanium text-gray-200 text-sm md:text-base leading-relaxed text-justify shadow-black drop-shadow-md">
              Coimbra, the fourth-largest city in Portugal and the capital of the Coimbra District, <strong className="text-white font-bold">is a
                historic and cultural gem nestled along the Mondego River</strong>. Known as the "City of
              Students," it is home to the University of Coimbra, a UNESCO World Heritage Site and
              the oldest university in Portugal, founded in 1290. Recently recognized by The New York Times as one of the "52 Places to Go in
              2025," Coimbra is celebrated for blending tradition and modernity, with <strong className="text-white font-bold">its vibrant
                student culture, lively nightlife, and numerous attractions</strong>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutGalaxySection;