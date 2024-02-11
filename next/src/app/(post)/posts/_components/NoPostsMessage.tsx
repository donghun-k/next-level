import { PiSmileySadBold } from "react-icons/pi";

const NoPostsMessage = () => {
  return (
    <p className="flex w-full items-center justify-center p-8 text-base text-gray-500 sm:text-2xl">
      <PiSmileySadBold className="mr-2 mt-1 h-5 w-5 sm:h-7 sm:w-7" />
      There are no posts yet.
      <PiSmileySadBold className="ml-2 mt-1 h-5 w-5 sm:h-7 sm:w-7" />
    </p>
  );
};

export default NoPostsMessage;
