import dynamic from "next/dynamic";

const SyncLoader = dynamic(() => import("react-spinners/SyncLoader"), {
  ssr: false,
});

const TypingLoader = () => {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <SyncLoader color="#374151" size={15} margin={10} />
    </div>
  );
};

export default TypingLoader;
