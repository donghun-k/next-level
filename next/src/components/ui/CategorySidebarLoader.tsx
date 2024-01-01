import dynamic from "next/dynamic";

const PuffLoader = dynamic(() => import("react-spinners/PuffLoader"), {
  ssr: false,
});

const CategorySidebarLoader = () => {
  return <PuffLoader color="#374151" />;
};

export default CategorySidebarLoader;
