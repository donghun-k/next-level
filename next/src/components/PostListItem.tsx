"use client";
import Image from "next/image";
import Link from "next/link";

import { converToLocaleString } from "@/utils/date";
import { SimplePost } from "@/models/post";

const PostListItem = ({
  post: { publishedAt, body, title, category, categoryImage, id, views },
}: {
  post: SimplePost;
}) => {
  return (
    <li className="flex h-[200px] w-full justify-between gap-6">
      <Link href={`/post/${id}`} className="relative h-[200px] min-w-[250px]">
        <Image
          className="object-cover"
          src={categoryImage}
          alt="Post thumbnail"
          sizes="300px 200px"
          fill
        />
      </Link>
      <div className="flex w-full flex-col justify-between overflow-hidden pl-4">
        <Link
          href={`/post/${id}`}
          className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold underline-offset-2 hover:underline"
        >
          {title}
        </Link>

        <div className="flex items-center gap-2 text-gray-500">
          <Link
            href={`/category/${category}`}
            className="text-md underline underline-offset-1 hover:text-gray-400"
          >
            {category}
          </Link>
          <p>·</p>
          <p className="text-sm">{publishedAt}</p>
          <p>·</p>
          <p className="text-sm">
            {views} {views === 1 ? "view" : "views"}
          </p>
        </div>
        <p className="text-md line-clamp-5 h-[120px] w-full overflow-hidden text-ellipsis text-gray-500">
          {body}
        </p>
      </div>
    </li>
  );
};

export default PostListItem;
