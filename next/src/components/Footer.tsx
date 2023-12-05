import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="flex h-[140px] w-full flex-col items-center justify-center gap-5 border-t-2 border-t-gray-100 bg-gray-50">
      <a href="https://github.com/donghun-k" target="blank">
        <RxGithubLogo className="h-10 w-10 text-gray-500 duration-500 hover:text-black" />
      </a>
      <p className="text-gray-500">ⓒ donghun-k</p>
    </footer>
  );
};

export default Footer;
