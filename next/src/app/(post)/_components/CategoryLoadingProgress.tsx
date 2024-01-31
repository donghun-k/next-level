import dynamic from "next/dynamic";

const ScaleLoader = dynamic(() => import("react-spinners/ScaleLoader"), {
  ssr: false,
});

const CategoryLoadingProgress = () => {
  return <ScaleLoader color="#374151" width={6} height={15} margin={5} />;
};

export default CategoryLoadingProgress;
