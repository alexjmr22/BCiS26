import SponsorLogo from "../ui/SponsorLogo";
import { supporters } from "../../data/supporters";

const SupportersSection = () => {

  return (
    <section id="supporters" className="pt-4 px-4 bg-[#D9D9D9]">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2
          className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-[#1B2A3B]
              mt-6 mb-6
              md:mt-12 md:mb-12
              font-orbitron
              tracking-wide
              md:tracking-wider
            "
        >
          SUPPORTERS
        </h2>


        <div className="flex flex-wrap justify-center items-center gap-12 max-w-[1200px] mx-auto">
          {supporters.map((supporter, index) => (
            <div key={index} className="flex justify-center w-full md:w-[calc(33.333%-2rem)]">
              <SponsorLogo
                logo={supporter.logo}
                name={supporter.name}
                className="w-56 h-28 md:w-72 md:h-36"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default SupportersSection;
