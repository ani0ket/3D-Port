import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <spam className="text-[#915eff]">Aniket</spam>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-sm`}>
            Front-End Engineer specialized in the optimization of workflows
            <br className="sm:block hidden" /> throughout the business and into
            engineering to ensure workflow frameworks are in place and being
            utilized to full capacity.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-4 bottom-28 w-full flex justify-center items-center ">
        <a href="#about" className="inset-0 z-40">
          <div className="w-[18px] h-[45px] rounded-3xl border-2 border-secondary flex justify-center items-start ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
