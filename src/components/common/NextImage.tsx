import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { cn } from '@/utils/className';

const NextImage = ({
  className,
  alt,
  width = 768,
  height = 480,
  ...rest
}: ImageProps) => {
  return (
    <Image
      className={cn('mono', className)}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default NextImage;
