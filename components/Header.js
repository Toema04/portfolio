// next image
import Image from "next/image";

// next link
import Link from "next/link";

// component
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center  px-16 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3
          lg:py-5 md:flex md:flex-row md:py-5 md:justify-between">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/logoST.svg'} 
              width={220}
              height={48}
              alt=""
              priority={true}
              className=" xl:pt-3 w-[80px]"
            />
          </Link>
          {/* socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
