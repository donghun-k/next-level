import Image from "next/image";
import Link from "next/link";

import { SimplePost } from "@/models/post";

const PostCard = ({
  post: { publishedAt, contentPreview, title, category, mainImage, id },
}: {
  post: SimplePost;
}) => {
  return (
    <li className="flex h-fit w-full max-w-[400px] flex-col justify-between gap-1 sm:h-[300px] sm:w-[300px] sm:gap-0">
      <Link
        href={`/post/${id}`}
        className="relative aspect-[5/3] w-full sm:aspect-[2/1]"
      >
        <Image
          className="object-cover"
          src={mainImage}
          alt="Card image"
          sizes="300px 150px"
          fill
        />
      </Link>
      <Link
        href={`/post/${id}`}
        className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold underline-offset-2 hover:underline"
      >
        {title}
      </Link>
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-2">
          <Link
            href={`/posts/${category}`}
            className="text-sm underline underline-offset-1 hover:text-gray-400"
          >
            {category}
          </Link>
          <p>·</p>
          <p className="text-xs">{publishedAt}</p>
        </div>
      </div>
      <p className="line-clamp-4 h-[80px] w-full overflow-hidden text-ellipsis text-sm text-gray-500">
        {contentPreview}
      </p>
    </li>
  );
};

export default PostCard;
