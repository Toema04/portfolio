// components

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"

// framer motion
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col mb-1 xl:mb-0 justify-start lg:text-center cursor-default">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-[45px] mt-12 mb-0 xl:mt-9">
              My services <span className="text-accent ">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-0 mt-0 max-w-[900px] mx-auto lg:mx-0 ">
              Developing conpceptual ideas for websites using any front-end tool
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] ">
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

export default Services;
