import { Button } from '@/components/ui/button';

interface Props {
  tag: string;
}

const TagButton = ({ tag }: Props) => {
  return (
    <Button className="rounded-full px-4 py-2 text-sm font-bold">{tag}</Button>
  );
};

export default TagButton;
