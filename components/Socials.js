// next link
import Link from "next/link";

import {
  // RiYoutubeLine,
  RiInstagramLine,
  RiMessengerLine,
  // RiDribbbleLine,
  // RiBehanceLine,
  // RiPinterestLine,
  // RiTwitterLine,
  RiLinkedinLine,
  RiDiscordLine,
  RiGithubLine,
  // RiTwitterXLine
} from "react-icons/ri"

import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/seif-teima-0102a2253/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
      </Link>
      {/* <Link href={'https://www.facebook.com/messages/t/100012611160645'} className="hover:text-accent transition-all duration-300">
      <RiMessengerLine/>
      </Link> */}
      <Link href={'https://www.instagram.com/toemasaif/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
      </Link>
      <Link href={'https://twitter.com/STo3ima'} className="hover:text-accent transition-all duration-300">
      <FaXTwitter/>
      </Link>
      <Link
            href={'https://l.facebook.com/l.php?u=http%3A%2F%2Fdiscordapp.com%2Fusers%2Fst041234%3Ffbclid%3DIwAR3s57uoWzzWbMjx0p2v3vyzId4j30ofkaPUsAc6tV8q7KmNrtkTbpMWQ4Y&h=AT2IpZu4gz5PsnVfoXW2decp4ckaUMXiQa9j_HkYa4VYY71XA0E-jWp6-H1zgFAkBaRn9TjtY7V81UAdfrQYfXo1KP8E3D8gsff_8WBBvj0baF7rvHWouUJaUfQuqqNU0XLqhQ'}
        className="hover:text-accent transition-all duration-300">
      <RiDiscordLine/>
      </Link>
      <Link href={'https://github.com/Toema04'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
      </Link>
    </div>
  );
};

export default Socials;
