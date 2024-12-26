import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface Props {
  tag: string;
}

const TagButton = ({ tag }: Props) => {
  return (
    <Link href={`/posts?tag=${tag}`}>
      <Button
        variant="secondary"
        className="size-fit rounded-xl px-4 py-1 text-sm font-semibold max-md:text-xs"
      >
        {tag}
      </Button>
    </Link>
  );
};

export default TagButton;
