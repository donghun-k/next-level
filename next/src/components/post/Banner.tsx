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
    <section className="relative flex h-[160px] w-[100vw] min-w-[360px] justify-center bg-gray-500 sm:h-[250px] sm:min-w-[1024px]">
      <div className="flex h-full w-full max-w-screen-lg flex-col justify-center px-4">
        <Link href={`/posts/${category}`}>
          <h3 className="mb-2 text-sm font-semibold text-gray-300 sm:text-base">
            {category}
          </h3>
        </Link>
        <h2 className="mb-10 text-2xl font-bold text-white sm:mb-20 sm:text-3xl">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-300 sm:text-sm">
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
