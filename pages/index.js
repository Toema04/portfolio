import Image from "next/image";

// compenents
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary\60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto sm:relative  xl:top-0  ">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="h1 xl:mb-6 xs:mt-3 relative sm:top-5 ">
             Hello I'm Saif Toema<br />
            <span className="text-accent">Front End Developer</span>
          </motion.h1>
          {/* subTitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-6 ">
            My name is Saif Toema I'm Front end Developer
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 xl:bg-no-repeat">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avater img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[630px] max-h-[570px] absolute -bottom-32 
          lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
