import Image from "next/image";
import Link from "next/link";

import { SimplePost } from "@/models/post";

const PopularPostCard = ({
  post: { publishedAt, body, title, category, categoryImage, id },
}: {
  post: SimplePost;
}) => {
  return (
    <div className="flex h-[300px] w-[300px] flex-col justify-between">
      <Link href={`/post/${id}`} className="relative h-[150px] w-full">
        <Image
          className="object-cover"
          src={categoryImage}
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
            href={`/category/${category}`}
            className="text-sm underline underline-offset-1 hover:text-gray-400"
          >
            {category}
          </Link>
          <p>·</p>
          <p className="text-xs">{publishedAt}</p>
        </div>
      </div>
      <p className="line-clamp-4 h-[80px] w-full overflow-hidden text-ellipsis text-sm text-gray-500">
        {body}
      </p>
    </div>
  );
};

export default PopularPostCard;
