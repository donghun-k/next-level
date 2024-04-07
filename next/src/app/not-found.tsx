import Link from 'next/link';
import { PiSmileySadBold } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2 pb-10">
      <PiSmileySadBold className="h-44 w-44 text-gray-700" />
      <h1 className="text-3xl font-extrabold text-gray-700">Page not found</h1>
      <p className="text-center text-lg font-semibold text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button
          className="mt-4 flex items-center gap-2 rounded-md bg-gray-500 px-6 py-2 shadow-md duration-500 hover:bg-gray-400 active:bg-gray-700"
          type="button"
        >
          <span className=" text-lg font-bold text-white">Go to home</span>
          <FaHome className="h-6 w-6 text-white" />
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
