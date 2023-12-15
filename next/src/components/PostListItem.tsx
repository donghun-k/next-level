"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SimplePost } from "@/models/post";
import { converToLocaleString } from "@/utils/date";

const PostListItem = ({
  post: { publishedAt, body, title, category, categoryImage, id },
}: {
  post: SimplePost;
}) => {
  const dateString = converToLocaleString(publishedAt);
  return (
    <li className="flex h-[200px] w-full justify-between gap-6">
      <Link href={`/post/${id}`} className="relative h-[200px] w-[300px]">
        <Image
          className="object-cover"
          src={categoryImage}
          alt="Post thumbnail"
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
          <p className="text-sm">{dateString}</p>
        </div>
        <p className="text-md line-clamp-5 h-[120px] w-full overflow-hidden text-ellipsis text-gray-500">
          {body}
        </p>
      </div>
    </li>
  );
};

export default PostListItem;
