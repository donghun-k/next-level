import Link from "next/link";

import { Post } from "@/models/post";

import ViewCounter from "./ViewCounter";

const Banner = ({ post }: { post: Post }) => {
  const { title, category, publishedAt, id, mainImage } = post;
  console.log(mainImage);
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage})`,
      }}
      className="relative flex h-[160px] w-[100vw] min-w-[360px] justify-center bg-gray-500 bg-cover bg-center sm:h-[250px] sm:min-w-[1024px]"
    >
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
            <ViewCounter postId={id} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;