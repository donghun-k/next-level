import { Button } from '@/components/ui/button';

interface Props {
  tag: string;
}

const TagButton = ({ tag }: Props) => {
  return (
    <Button
      variant="secondary"
      className="size-fit rounded-full px-4 py-1 text-sm"
    >
      {tag}
    </Button>
  );
};

export default TagButton;
