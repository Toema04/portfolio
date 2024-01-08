// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/project1.png',
          link: "https://toema04.github.io/React-3D/"
        },
        {
          title: 'title',
          path: '/project2.png',
          link: "https://portfolio-psi-dun-19.vercel.app/"
        },
        {
          title: 'title',
          path: '/project3.png',
          link: "https://toema04.github.io/firstPortfolio/"
        },
        {
          title: 'title',
          path: '/project4.png',
          link: "https://toema04.github.io/Modern-HooBank/"
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/project5.png',
          link: "https://toema04.github.io/SeifPortfolio/"
        },
        {
          title: 'title',
          path: '/project6.png',
          link: "https://toema04.github.io/project-4/"
        },
        {
          title: 'title',
          path: '/project7.png',
          link: "https://toema04.github.io/Dashboard/"
        },
        {
          title: 'title',
          path: '/project8.png',
          link: "https://toema04.github.io/simple-project/"
        },
      ],
    },
  ],
};

// // import swiper react component
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// // import required modules
import { Pagination } from "swiper";

// icon
import { BsArrowRight } from "react-icons/bs"

// image next
import Image from "next/image";

// next link
import Link from "next/link"

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] w-[370px] md:h-[450px] md:w-[600px] lg:h-[470px] lg:w-[700px] xl:h-[480px] xl:w-[100%]"
    // md:h-[380px] lg:h-[480px]
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group rounded-lg">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-20 transition-all duration-300 flex items-center">
                        <Link href={image.link ? image.link : 'https://github.com/Toema04'} className="">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] sm:pb-2 md:pb-7 lg:pb-9 xl:pb-2">
                            {/* title part 1 */}
                            <div className="delay-100">PROJECT</div>
                            {/* title part 2*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0
                           transition-all duration-300 delay-150">REPO</div>
                            {/* icon*/}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-200"><BsArrowRight /></div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper >
  );
};

export default WorkSlider;