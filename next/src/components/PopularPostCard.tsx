import Image from "next/image";
import Link from "next/link";

interface Props {}

const PopularPostCard = () => {
  return (
    <div className="flex h-[300px] w-[300px] flex-col justify-between">
      <Link href="/" className="relative h-[150px] w-full">
        <Image
          className="object-cover"
          src="/images/profile-image.png"
          alt="Card image"
          fill
        />
      </Link>
      <Link
        href="/"
        className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold underline-offset-2 hover:underline"
      >
        Lorem ipsum dolor sit amet consectetur.
      </Link>
      <div className="flex items-center gap-2 text-gray-500">
        <Link
          href="/"
          className="text-sm underline underline-offset-1 hover:text-gray-400"
        >
          Lorem
        </Link>
        <p>·</p>
        <p className="text-xs">2021-09-22</p>
      </div>
      <p className="line-clamp-4 h-[80px] w-full overflow-hidden text-ellipsis text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur. In platea consectetur
        pellentesque suspendisse tellus ut. Phasellus tristique risus ipsum nunc
        donec sapien. Volutpat aliquam mattis consectetur feugiat viverra odio
        aliquam.
      </p>
    </div>
  );
};

export default PopularPostCard;
