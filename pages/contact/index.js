// components
import Circles from "/components/Circles"

// icons

import { RiDiscordLine, RiGithubLine, RiLinkedinLine, RiMessengerLine, RiTwitterXLine } from "react-icons/ri"

// framer
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../../variants"

import Link from "next/link"

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 text-center mb-4 md:mb-3 md:mt-4 mt-10">
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex-1 flex flex-col gap-6 w-full mx-auto justify-center">
            {/* input group */}
            {/* <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input"/>
              <input type="text" placeholder="email" className="input"/>
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="massage" className="textarea"></textarea> */}
            <div className="w-full flex justify-center ">
            <div
              // flex sm:flex-row gap-x-5 flex-col
              className="grid grid-cols-2 gap-5 grid-row-1 h-full ">
              <div className="w-[150px] h-[150px] border border-white/50 group rounded-lg
              flex items-center justify-center hover:border-accent group transition-all duration-300">
                <Link href={'https://github.com/Toema04'} className="flex items-center justify-center flex-col" >
                  <RiGithubLine
                    className="text-[40px] cursor-pointer
                    -translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100
                    transition-all duration-300 absolute " />
                  <h4
                    className=" group-hover:-translate-y-[120%] group-hover:opacity-0
                     transition-all duration-500 cursor-pointer text-[25px]">
                    Github</h4>
                </Link>
              </div>
              <div className="w-[150px] h-[150px] border border-white/50 group rounded-lg
              flex items-center justify-center hover:border-accent group transition-all duration-300">
                <Link href={'https://www.linkedin.com/in/seif-teima-0102a2253/'} className="flex items-center justify-center flex-col" >
                  <RiLinkedinLine
                    className="text-[40px] cursor-pointer
                    -translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100
                    transition-all duration-300 absolute " />
                  <h4
                    className=" group-hover:-translate-y-[120%] group-hover:opacity-0
                     transition-all duration-500 cursor-pointer text-[25px]">
                    Linkedin</h4>
                </Link>
              </div>
              <div className="w-[150px] h-[150px] border border-white/50 group rounded-lg
              flex items-center justify-center hover:border-accent group transition-all duration-300">
                <Link href={'https://twitter.com/STo3ima'} className="flex items-center justify-center flex-col" >
                  <RiTwitterXLine
                    className="text-[40px] cursor-pointer
                    -translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100
                    transition-all duration-300 absolute " />
                  <h4
                    className=" group-hover:-translate-y-[120%] group-hover:opacity-0
                     transition-all duration-500 cursor-pointer text-[23px]">
                    Twitter</h4>
                </Link>
              </div>
              <div className="w-[150px] h-[150px] border border-white/50 group rounded-lg
              flex items-center justify-center hover:border-accent group transition-all duration-300">
                  <Link
                    href={'https://l.facebook.com/l.php?u=http%3A%2F%2Fdiscordapp.com%2Fusers%2Fst041234%3Ffbclid%3DIwAR3s57uoWzzWbMjx0p2v3vyzId4j30ofkaPUsAc6tV8q7KmNrtkTbpMWQ4Y&h=AT2IpZu4gz5PsnVfoXW2decp4ckaUMXiQa9j_HkYa4VYY71XA0E-jWp6-H1zgFAkBaRn9TjtY7V81UAdfrQYfXo1KP8E3D8gsff_8WBBvj0baF7rvHWouUJaUfQuqqNU0XLqhQ'}
                    className="flex items-center justify-center flex-col" >
                   <RiDiscordLine
                    className="text-[40px] cursor-pointer
                    -translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100
                    transition-all duration-300 absolute " />
                  <h4
                    className=" group-hover:-translate-y-[120%] group-hover:opacity-0
                     transition-all duration-500 cursor-pointer text-[23px]">
                    Discord</h4>
                </Link>
              </div>
              </div>
              </div>
            {/* <button className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">

              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
               group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] "/>
            </button> */}
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
