import Link from "next/link";

import ViewCounter from "./ViewCounter";

interface Props {
  title: string;
  category: string;
  publishedAt: string;
  postId: string;
}

const Banner = ({ title, category, publishedAt, postId }: Props) => {
  return (
    <section className="relative flex h-[250px] w-[100vw] min-w-[360px] justify-center bg-gray-500 sm:min-w-[1024px]">
      <div className="flex h-full w-full max-w-screen-lg flex-col px-4 py-10">
        <Link href={`/posts/${category}`}>
          <h3 className="mb-2 font-semibold text-gray-300">{category}</h3>
        </Link>
        <h2 className="mb-20 text-3xl font-bold text-white">{title}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <p>{publishedAt}</p>
          <p>·</p>
          <p>
            <ViewCounter postId={postId} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
