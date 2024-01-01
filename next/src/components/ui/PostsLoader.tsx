import dynamic from "next/dynamic";

const PulseLoader = dynamic(() => import("react-spinners/PulseLoader"), {
  ssr: false,
});

const PostsLoader = () => {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <PulseLoader color="gray" size={15} margin={10} />
    </div>
  );
};

export default PostsLoader;
