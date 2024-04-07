import { RxGithubLogo } from 'react-icons/rx';

const Footer = () => {
  return (
    <footer className="flex h-[100px] w-full flex-col items-center justify-center gap-3 border-t-2 border-t-gray-100 bg-gray-50 sm:h-[140px] sm:gap-5">
      <a href="https://github.com/donghun-k" target="blank">
        <RxGithubLogo className="h-8 w-8 text-gray-500 duration-500 hover:text-black sm:h-10 sm:w-10" />
      </a>
      <p className="text-sm text-gray-500 sm:text-base">ⓒ donghun-k</p>
    </footer>
  );
};

export default Footer;
