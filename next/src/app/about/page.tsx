import { Metadata } from 'next';
import Image from 'next/image';

import TypeScriptIcon from '@/app/about/_components/TypeScriptIcon';
import ReactIcon from '@/app/about/_components/ReactIcon';
import NextIcon from '@/app/about/_components/NextIcon';
import ReactQueryIcon from '@/app/about/_components/ReactQueryIcon';
import MUIIcon from '@/app/about/_components/MUIIcon';
import TailwindCSSIcon from '@/app/about/_components/TailwindCSSIcon';
import HTMLIcon from '@/app/about/_components/HTMLIcon';
import CSSIcon from '@/app/about/_components/CSSIcon';
import JavaScriptIcon from '@/app/about/_components/JavaScriptIcon';
import ReduxIcon from '@/app/about/_components/ReduxIcon';
import SWRIcon from '@/app/about/_components/SWRIcon';
import StyledComponentsIcon from '@/app/about/_components/StyledComponentsIcon';

export const metadata: Metadata = {
  title: 'About Me ┃ NEXT LEVEL',
  description: 'DongHun, Kim의 소개 페이지입니다.',
  openGraph: {
    title: 'About Me ┃ NEXT LEVEL',
    description: 'DongHun, Kim의 소개 페이지입니다.',
  },
};

const AboutPage = () => {
  return (
    <section className="flex min-w-[360px] items-center justify-center px-8 pb-[50px] pt-[100px] sm:pb-[80px] sm:pt-[150px]">
      <div className="relative flex h-[450px] w-full flex-col items-center justify-center rounded-xl bg-gray-50 pt-[60px] shadow-xl sm:h-[600px] sm:w-[600px] sm:pt-[100px]">
        <Image
          className="absolute top-[-80px] h-[150px] w-[150px] rounded-[50%] shadow-xl sm:top-[-100px] sm:h-[230px] sm:w-[230px]"
          src="/images/profile-image.png"
          alt="Profile image"
          width={230}
          height={230}
        />
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-extrabold drop-shadow-custom sm:text-4xl">
              DongHun, Kim
            </p>
            <p className="text-md sm:text-md font-bold text-gray-500">
              Front-end Web Developer
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-gray-700">
            <p className="text-lg font-extrabold sm:text-2xl">SKILLS</p>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <TypeScriptIcon />
              </div>
              <div className="flex gap-2">
                <ReactIcon />
                <NextIcon />
              </div>
              <div className="flex gap-2">
                <TailwindCSSIcon />
                <StyledComponentsIcon />
                <MUIIcon />
              </div>
              <div className="flex gap-2">
                <ReduxIcon />
                <ReactQueryIcon />
                <SWRIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
