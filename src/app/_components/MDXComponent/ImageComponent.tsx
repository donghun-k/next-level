import Image from 'next/image';
import type { ComponentProps } from 'react';

// ImageComponent의 타입을 ReactMarkdown에서 기대하는 타입으로 조정
const ImageComponent = (props: ComponentProps<'img'>) => (
  <Image
    className="max-h-60 w-full object-cover"
    src={props.src || ''}
    alt={props.alt || ''}
    width={500}
    height={350}
  />
);

export default ImageComponent;
