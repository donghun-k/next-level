import dynamic from "next/dynamic";

const PuffLoader = dynamic(() => import("react-spinners/PuffLoader"), {
  ssr: false,
});

const CategoryLoadingProgress = () => {
  return <PuffLoader color="#374151" />;
};

export default CategoryLoadingProgress;
