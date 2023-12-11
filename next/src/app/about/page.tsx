import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const AboutPage = () => {
  return (
    <section className="flex items-center justify-center pb-[80px] pt-[150px]">
      <div className="relative flex h-[400px] w-[600px] flex-col items-center justify-center rounded-xl bg-gray-50 pt-[100px] shadow-xl">
        <Image
          className="absolute top-[-100px] rounded-[50%]  shadow-xl"
          src="/images/profile-image.png"
          alt="Profile image"
          width={230}
          height={230}
        />
        <div className="flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-3">
            <p className="text-4xl font-extrabold">DongHun, Kim</p>
            <p className="text-lg font-bold text-gray-500">
              Front-end Web Developer
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-gray-700">
            <p className="text-2xl font-extrabold">SKILLS</p>
            <ul className="flex items-center gap-8">
              <li>
                <BiLogoTypescript className="h-12 w-12 duration-500 hover:scale-110 hover:text-[#3178c6]" />
              </li>
              <li>
                <SiReact className="h-10 w-10 duration-500 hover:scale-110 hover:text-[#61dafb]" />
              </li>
              <li>
                <SiNextdotjs className="h-10 w-10 duration-500 hover:scale-110 hover:text-[#000000]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
