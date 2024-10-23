import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { cn } from '@/utils/className';

const NextImage = ({ className, alt, ...rest }: ImageProps) => {
  return <Image className={cn('mono', className)} alt={alt} {...rest} />;
};

export default NextImage;
