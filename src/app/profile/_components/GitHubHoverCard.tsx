import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Skeleton } from '@/components/ui/skeleton';

const PROFILE_IMAGE_URL = 'https://avatars.githubusercontent.com/u/60064471';
const PROFILE_PAGE_URL = 'https://github.com/donghun-k';

const GitHubHoverCard = () => {
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <Button type="button">
          <IoLogoGithub className="mr-2 size-6" />
          GitHub
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="size-fit">
        <Link href={PROFILE_PAGE_URL}>
          <div className="flex gap-4">
            <div className="space-y-1">
              <p className="text-sm font-bold">Donghun Kim</p>
              <p className="text-sm text-muted-foreground">donghun-k</p>
            </div>
            <Avatar>
              <AvatarImage src={PROFILE_IMAGE_URL} />
              <AvatarFallback>
                <Skeleton className="size-full" />
              </AvatarFallback>
            </Avatar>
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GitHubHoverCard;
