import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostListItem = () => {
  return (
    <li className="flex h-[200px] w-full justify-between gap-6">
      <Link href="/" className="relative h-[200px] w-[300px]">
        <Image
          className="object-cover"
          src="/images/profile-image.png"
          alt="Post thumbnail"
          fill
        />
      </Link>
      <div className="flex w-full flex-col justify-between overflow-hidden pl-4">
        <Link
          href="/"
          className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold underline-offset-2 hover:underline"
        >
          Lorem ipsum dolor sit amet consectetur.
        </Link>

        <div className="flex items-center gap-2 text-gray-500">
          <Link
            href="/"
            className="text-md underline underline-offset-1 hover:text-gray-400"
          >
            Lorem
          </Link>
          <p>·</p>
          <p className="text-sm">2021-09-22</p>
        </div>
        <p className="text-md line-clamp-5 h-[120px] w-full overflow-hidden text-ellipsis text-gray-500">
          Lorem ipsum dolor sit amet consectetur. In platea consectetur
          pellentesque suspendisse tellus ut. Phasellus tristique risus ipsum
          nunc donec sapien. Volutpat aliquam mattis consectetur feugiat viverra
          odio aliquam. Lorem ipsum dolor sit amet consectetur. In platea
          consectetur pellentesque suspendisse tellus ut. Phasellus tristique
          risus ipsum nunc donec sapien. Volutpat aliquam mattis consectetur
          feugiat viverra odio aliquam.Lorem ipsum dolor sit amet consectetur.
          In platea consectetur pellentesque suspendisse tellus ut. Phasellus
          tristique risus ipsum nunc donec sapien. Volutpat aliquam mattis
          consectetur feugiat viverra odio aliquam.
        </p>
      </div>
    </li>
  );
};

export default PostListItem;
