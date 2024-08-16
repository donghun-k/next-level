import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { fetchGitHubFileContent } from '@/services/github';

import Markdown from '../_components/Markdown';

const ProfilePage = async () => {
  const profileMarkdown = await fetchGitHubFileContent({
    username: 'donghun-k',
    repo: 'donghun-k',
    path: 'README.md',
  });

  return (
    <main>
      <section className="mx-auto flex h-[calc(100vh-80px)] max-w-screen-xl items-center justify-center gap-[100px] pb-[80px]">
        <Avatar className="size-[360px] ring-4 ring-slate-300 dark:ring-slate-800">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/60064471"
            alt="Donghun Kim"
          />
          <AvatarFallback>DH</AvatarFallback>
        </Avatar>
        <Card className="bg-[#fafafa] dark:bg-[rgb(47,47,47)]">
          <CardContent className="w-[500px] p-0">
            <Markdown content={profileMarkdown} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ProfilePage;
